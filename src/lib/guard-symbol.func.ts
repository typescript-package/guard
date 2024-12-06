// Function.
import { isSymbol } from '@typescript-package/is';
// Type.
import { ResultCallback } from '@typescript-package/type';
/**
 * @description Guards the value to be a `symbol`.
 * @template {object} Payload
 * @param {symbol} value A `symbol` type value to guard.
 * @param {?ResultCallback<symbol, Payload>} [callback] An optional `ResultCallback` function to handle the result before returns.
 * @param {?Payload} [payload] Optional `object` of generic type variable `Payload` is assigned to the `payload` of the provided `callback` function.
 * @returns {value is symbol} The return value is a `boolean` indicating whether the `value` is a `symbol`.
 */
export const guardSymbol = <Payload extends object>(
  value: symbol,
  callback?: ResultCallback<symbol, Payload>,
  payload?: Payload
): value is symbol => isSymbol(value, callback, payload);
