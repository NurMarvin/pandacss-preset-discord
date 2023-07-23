import { Project, SourceFile, SyntaxKind } from "ts-morph";
import fs from "fs";
import prettier from "prettier";

// Helper function to extract the colors
const extractColors = (node: any) => {
  const result: Record<
    string,
    {
      dark: string;
      light: string;
      amoled: string;
    }
  > = {};

  for (const property of node.getProperties()) {
    const name = property.getName();
    const callExpression = property.getInitializer();
    if (
      callExpression &&
      callExpression.getKind() === SyntaxKind.CallExpression
    ) {
      const args = callExpression.getArguments();
      if (
        args.length === 1 &&
        args[0].getKind() === SyntaxKind.ObjectLiteralExpression
      ) {
        const objectLiteral = args[0] as any;
        const dark = objectLiteral.getProperty("dark")?.getInitializer();
        const light = objectLiteral.getProperty("light")?.getInitializer();
        const amoled = objectLiteral.getProperty("amoled")?.getInitializer();

        // The values can be literal strings, or objects with a "color" and "opacity" property which is a number. We want to store them as literal objects.

        function getValue(node: any) {
          if (!node) return undefined;

          if (node.getKind() === SyntaxKind.StringLiteral) {
            return JSON.parse(node.getText());
          }

          if (node.getKind() === SyntaxKind.ObjectLiteralExpression) {
            return {
              color: JSON.parse(
                node.getProperty("color")?.getInitializer()?.getText()
              ),
              opacity: Number(
                node.getProperty("opacity")?.getInitializer()?.getText()
              ),
            };
          }
        }

        result[JSON.parse(name)] = {
          dark: getValue(dark),
          light: getValue(light),
          amoled: getValue(amoled),
        };
      }
    }
  }
  return result;
};

// Parse the TypeScript code
const project = new Project();
const sourceFile: SourceFile = project.addSourceFileAtPath(
  "assets/semanticTokens.ts"
);

// Find the semanticTokenValues object
const semanticTokenValuesNode = sourceFile.getFirstDescendant((node) => {
  return (
    node.getKind() === SyntaxKind.VariableStatement &&
    node.getText().includes("semanticTokenValues")
  );
});

type Color = string | { color: string; opacity: number };

type Colors = {
  [key: string]: {
    dark: Color;
    light: Color;
    amoled?: Color;
  };
};

// Extract the colors from the semanticTokenValues object
let colors: Colors = {};

if (semanticTokenValuesNode) {
  const initializer = semanticTokenValuesNode
    .getFirstChildByKind(SyntaxKind.VariableDeclarationList)
    ?.getFirstChildByKind(SyntaxKind.VariableDeclaration)
    ?.getInitializer();
  if (
    initializer &&
    initializer.getKind() === SyntaxKind.ObjectLiteralExpression
  ) {
    colors = extractColors(initializer);
  }
}

import { colors as colorPalette } from "../src/colors/raw";

import color from "color";

type ThemedTokenValue =
  | string
  | {
      color: string;
      opacity: number;
    };

type ThemedToken = {
  dark: ThemedTokenValue;
  light: ThemedTokenValue;
  amoled?: ThemedTokenValue;
};

function tokenValue(token: string): string {
  if (!colorPalette) return token;

  const parts = token.split(".");

  let current: any = colorPalette;
  let value: string = token;

  for (const part of parts) {
    // Traverse the object until we find the value
    if (current[part]) {
      current = current[part];
      value = current.value;
    }
  }

  return value;
}

function tokenWithOpacity(token: string, opacity: number) {
  const value = tokenValue(token);

  if (!value) return `{colors.${token}}`;

  return color(value).alpha(opacity).string();
}

function themedToken({ dark, light, amoled = dark }: ThemedToken) {
  const darkValue =
    typeof dark === "object"
      ? tokenWithOpacity(dark.color, dark.opacity)
      : `{colors.${dark}}`;
  const lightValue =
    typeof light === "object"
      ? tokenWithOpacity(light.color, light.opacity)
      : `{colors.${light}}`;
  const amoledValue =
    typeof amoled === "object"
      ? tokenWithOpacity(amoled.color, amoled.opacity)
      : `{colors.${amoled}}`;

  return {
    value: {
      _dark: darkValue,
      _light: lightValue,
      _amoled: amoledValue ?? darkValue,
    },
  };
}

function convertColorsToObject(colors: Colors) {
  const result: Record<string, any> = {};

  for (const [key, value] of Object.entries(colors)) {
    const parts = key.split("-");
    let current = result;

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];

      if (i === parts.length - 1) {
        current[part] = themedToken(value);
      } else {
        current[part] = current[part] || {};
        current = current[part];
      }
    }
  }

  return result;
}

colors = convertColorsToObject(colors);

(async () => {
  const result = await prettier.format(
    `import type { SemanticTokens } from "@pandacss/types";

  export const semanticColors = ${JSON.stringify(
    colors,
    null,
    2
  )} as const satisfies SemanticTokens["colors"];`,
    {
      parser: "typescript",
    }
  );

  // Write the colors to a file
  fs.writeFileSync("src/colors/semantic.ts", result, "utf-8");
})();
