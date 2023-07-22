import type { TextStyles, Tokens } from "@pandacss/types";

export const fontSizes: Tokens["fontSizes"] = {
  heading: {
    sm: { value: "14px" },
    md: { value: "16px" },
    lg: { value: "20px" },
    xl: { value: "24px" },
    xxl: { value: "32px" },
  },
  text: {
    xxs: { value: "10px" },
    xs: { value: "12px" },
    sm: { value: "14px" },
    md: { value: "16px" },
    lg: { value: "18px" },
  },
  display: {
    sm: { value: "20px" },
    md: { value: "34px" },
    lg: { value: "44px" },
  },
};

export const fontWeights: Tokens["fontWeights"] = {
  normal: { value: "400" },
  medium: { value: "500" },
  semibold: { value: "600" },
  bold: { value: "700" },
  extrabold: { value: "800" },
};

export const lineHeights: Tokens["lineHeights"] = {
  heading: {
    sm: { value: "1.2" },
    md: { value: "1.3" },
    lg: { value: "1.4" },
    xl: { value: "1.5" },
    xxl: { value: "1.6" },
  },
  text: {
    xxs: { value: "12px" },
    xs: { value: "16px" },
    sm: { value: "18px" },
    md: { value: "20px" },
    lg: { value: "24px" },
  },
};

export const fonts: Tokens["fonts"] = {
  sans: {
    value: [
      "gg sans",
      "Noto Sans",
      "Helvetica Neue",
      "Helvetica",
      "Arial",
      "sans-serif",
    ],
  },
  display: {
    value: [
      "gg sans",
      "Noto Sans",
      "Helvetica Neue",
      "Helvetica",
      "Arial",
      "sans-serif",
    ],
  },
  headline: {
    value: [
      "ABC Ginto Nord",
      "Noto Sans",
      "Helvetica Neue",
      "Helvetica",
      "Arial",
      "sans-serif",
    ],
  },
  mono: {
    value: [
      "Consolas",
      "Andale Mono WT",
      "Andale Mono",
      "Lucida Console",
      "Lucida Sans Typewriter",
      "DejaVu Sans Mono",
      "Bitstream Vera Sans Mono",
      "Liberation Mono",
      "Nimbus Mono L",
      "Monaco",
      "Courier New",
      "Courier",
      "monospace",
    ],
  },
};

function createTextStyle(name: string, sizes: string[], weights: string[]) {
  return {
    [name]: sizes
      .map((size) => ({
        [size]: weights
          .map((weight) => ({
            [weight]: {
              value: {
                fontWeight: weight,
                lineHeight: `${name}.${size}`,
                fontSize: `${name}.${size}`,
              },
            },
          }))
          .reduce((acc, cur) => ({ ...acc, ...cur }), {}),
      }))
      .reduce((acc, cur) => ({ ...acc, ...cur }), {}),
  };
}

export const textStyles: TextStyles = {
  ...createTextStyle(
    "heading",
    ["sm", "md", "lg", "xl", "xxl"],
    ["normal", "medium", "bold", "extrabold"]
  ),
  eyebrow: {
    value: {
      fontWeight: "bold",
      lineHeight: "text.xs",
      textTransform: "uppercase",
      letterSpacing: "0.02em",
    },
  },
  ...createTextStyle(
    "text",
    ["xxs", "xs", "sm", "md", "lg"],
    ["normal", "medium", "semibold", "bold"]
  ),
  display: {
    sm: {
      value: {
        fontWeight: "bold",
        lineHeight: "heading.sm",
        fontSize: "display.sm",
      },
    },
  },
};
