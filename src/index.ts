/**
 * Show invisibles options
 */
export interface Options {
  /**
   * transform mappings
   *
   * @see {@link DEFAULT_MAPPINGS}
   */
  mappings?: Map<string, string>
}

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

/**
 * Converts invisible characters to a commonly recognizable visible form
 *
 * @param input - The string with invisibles to convert
 * @param options - options {@link Options}
 * @returns The converted string
 *
 * @example
 *
 * ```ts
 * import { showInvisibles } from 'show-invisibles'
 *
 * const input = `1 2\n3\t4\r5`
 *
 * console.log(showInvisibles(input))
 *
 * // => 1·2⏎3↹4␍5
 * ```
 */
export function showInvisibles(input: string, options: Options = {}): string {
  const { mappings = DEFAULT_MAPPINGS } = options

  if (typeof input !== 'string') {
    throw new TypeError(`Expected input to type string, got ${typeof input}`)
  }

  return input
    .split('')
    .map(c => mappings.get(c) || c)
    .join('')
}
