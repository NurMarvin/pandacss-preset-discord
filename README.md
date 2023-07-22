# Panda CSS preset for Discord branding

Brings [Discord's branding](https://discord.com/branding) to Panda CSS.

## Installation

```bash
# npm
npm install pandacss-preset-discord

# yarn
yarn add pandacss-preset-discord

# pnpm
pnpm add pandacss-preset-discord
```

## Usage

Add the preset to your Panda CSS config (`panda.config.ts`):

```ts
import { defineConfig } from "@pandacss/dev";

// Import the preset
import discordPreset from "pandacss-preset-discord";

export default defineConfig({
  presets: [
    discordPreset,
    // ...
  ],
});
```

## Acknowledgements

- [Discord](https://discord.com/branding) for the branding
- [Panda CSS](https://pandacss.dev) for the framework

## License

MIT © 2023-Present [Marvin Witt](https://nurmarv.in)