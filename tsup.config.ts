import { defineConfig } from "tsup";

export default defineConfig(({ watch }) => ({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: !watch,
  minify: !watch,
  sourcemap: !watch,
}));
