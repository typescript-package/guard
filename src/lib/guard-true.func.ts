// Function.
import { isTrue } from '@typescript-package/is';
// Type.
import { ResultCallback } from '@typescript-package/type';
/**
 * @description Guards the value to be `true`.
 * @template {object} Payload
 * @param {true} value The value of `true` type to guard.
 * @param {?ResultCallback<true, Payload>} [callback] An optional `ResultCallback` function to handle the result before returns.
 * @param {?Payload} [payload] Optional `object` of generic type variable `Payload` is assigned to the `payload` of the provided `callback` function.
 * @returns {value is true} The return value is a `boolean` indicating whether the `value` is a `boolean` type or an instance of `Boolean` equal to `true`.
 */
export const guardTrue = <Payload extends object>(
  value: true,
  callback?: ResultCallback<true, Payload>,
  payload?: Payload
): value is true => isTrue(value, callback, payload);
