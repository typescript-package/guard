// Function.
import { isUndefined } from '@typescript-package/is';
// Type.
import { ResultCallback } from '@typescript-package/type';
/**
 * @description Guards the value to be `undefined`.
 * @template {object} Payload
 * @param {undefined} value The value of an `undefined` type to guard.
 * @param {?ResultCallback<undefined, Payload>} [callback] An optional `ResultCallback` function to handle the result before returns.
 * @param {?Payload} [payload] Optional `object` of generic type variable `Payload` is assigned to the `payload` of the provided `callback` function.
 * @returns {value is undefined} The return value is a `boolean` indicating whether the `value` is `undefined`.
 */
export const guardUndefined = <Payload extends object>(
  value: undefined,
  callback?: ResultCallback<undefined, Payload>,
  payload?: Payload
): value is undefined => isUndefined(value, callback, payload);
