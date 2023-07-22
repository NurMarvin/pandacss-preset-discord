import type { Config } from "@pandacss/types";

import { colors } from "./colors/raw";
import { semanticColors } from "./colors/semantic";
import { fontSizes, fontWeights, fonts, lineHeights, textStyles } from "./typography";

const defineConfig = <T extends Config>(config: T) => config;

export const preset = defineConfig({
  theme: {
    tokens: {
      colors,
      fontSizes,
      fontWeights,
      fonts,
      lineHeights,
    },
    semanticTokens: {
      colors: semanticColors,
    },
    textStyles,
  },
});

export default preset;
