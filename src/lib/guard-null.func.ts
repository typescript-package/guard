// Function.
import { isNull } from '@typescript-package/is';
// Type.
import { ResultCallback } from '@typescript-package/type';
/**
 * @description Guards the value to be `null`.
 * @template {object} Payload
 * @param {null} value The value of `null` type to guard.
 * @param {?ResultCallback<null, Payload>} [callback] An optional `ResultCallback` function to handle the result before returns.
 * @param {?Payload} [payload] Optional `object` of generic type variable `Payload` is assigned to the `payload` of the provided `callback` function.
 * @returns {value is null} The returned value is a `boolean` indicating whether the `value` is `null`.
 */
export const guardNull = <Payload extends object>(
  value: null,
  callback?: ResultCallback<null, Payload>,
  payload?: Payload
): value is null => isNull(value, callback, payload);
