// Function.
import { isFalse } from '@typescript-package/is';
// Type.
import { ResultCallback } from '@typescript-package/type';
/**
 * @description Guards the provided value to be `false`.
 * @template {object} Payload
 * @param {false} value The value of `false` type to guard.
 * @param {?ResultCallback<false, Payload>} [callback] An optional `ResultCallback` function to handle the result before returns.
 * @param {?Payload} [payload] Optional `object` of generic type variable `Payload` is assigned to the `payload` of the provided `callback` function.
 * @returns {value is false} The return value is a `boolean` indicating whether the `value` is a `boolean` type or an instance of `Boolean` equal to `false`.
 */
export const guardFalse = <Payload extends object>(
  value: false,
  callback?: ResultCallback<false, Payload>,
  payload?: Payload
): value is false => isFalse(value, callback, payload);
