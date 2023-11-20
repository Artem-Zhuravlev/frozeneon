/**
 * Creates a debounced function that delays invoking the provided function
 * until after `timeout` milliseconds have elapsed since the last time
 * the debounced function was invoked.
 *
 * @template T - The type of the original function to debounce.
 * @param {T} func - The function to debounce.
 * @param {number} [timeout=300] - The time in milliseconds to wait before invoking the debounced function.
 * @returns {(...args: Parameters<T>) => void} - A debounced function.
 */

type AnyFunction = (...args: any[]) => any;

export function debounce<T extends AnyFunction>(func: T, timeout: number = 300): (...args: Parameters<T>) => void {
  let timer: NodeJS.Timeout;


  /**
   * Debounced function that wraps the original function.
   *
   * @this {ThisParameterType<T>} - The type of the `this` parameter for the original function.
   * @param {...Parameters<T>} args - The parameters passed to the original function.
   * @returns {void}
   */
  return function (this: ThisParameterType<T>, ...args: Parameters<T>): void {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
