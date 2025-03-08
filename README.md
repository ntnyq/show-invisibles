# show-invisibles

[![CI](https://github.com/ntnyq/show-invisibles/workflows/CI/badge.svg)](https://github.com/ntnyq/show-invisibles/actions)
[![NPM VERSION](https://img.shields.io/npm/v/show-invisibles.svg)](https://www.npmjs.com/package/show-invisibles)
[![NPM DOWNLOADS](https://img.shields.io/npm/dy/show-invisibles.svg)](https://www.npmjs.com/package/show-invisibles)
[![LICENSE](https://img.shields.io/github/license/ntnyq/show-invisibles.svg)](https://github.com/ntnyq/show-invisibles/blob/main/LICENSE)

Converts invisible characters to a commonly recognizable visible form.

## Install

```shell
npm install show-invisibles
```

```shell
yarn add show-invisibles
```

```shell
pnpm add show-invisibles
```

## Usage

```ts
import { showInvisibles } from 'show-invisibles'

const input = `1 2\n3\t4\r5`

console.log(showInvisibles(input))

// => 1·2⏎3↹4␍5
```

## API

### showInvisibles

- **Type**: `(input: string, options?: Options) => string`

Converts invisible characters to a commonly recognizable visible form.

## Interface

```ts
export interface Options {
  /**
   * transform mappings
   *
   * @see {@link DEFAULT_MAPPINGS}
   */
  mappings?: Map<string, string>
}
```

## Built-in mappings

```ts
export const DEFAULT_MAPPINGS: Required<Options>['mappings'] = new Map([
  // Middle Dot, \u00B7
  [' ', '·'],
  // Return Symbol, \u23ce
  ['\n', '⏎'],
  // Left Arrow To Bar Over Right Arrow To Bar, \u21b9
  ['\r', '␍'],
  // Carriage Return Symbol, \u240D
  ['\t', '↹'],
])
```

## Credits

- Extracted from [prettier/prettier-linter-helpers](https://github.com/prettier/prettier-linter-helpers) with a little change. Published as ESM with TypeScript support.

## License

[MIT](./LICENSE) License © 2025-PRESENT [ntnyq](https://github.com/ntnyq)
