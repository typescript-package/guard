// Function.
import { isKey } from '@typescript-package/is';
// Type.
import { ResultCallback } from '@typescript-package/type';
/**
 * @description Guards the value to be one of `string`, `number`, or `symbol` type.
 * @template {PropertyKey} Key
 * @template {object} Payload
 * @param {Key} value The value of generic type variable `Key` to guard.
 * @param {?ResultCallback<Key, Payload>} [callback] An optional `ResultCallback` function to handle the result before returns.
 * @param {?Payload} [payload] Optional `object` of generic type variable `Payload` is assigned to the `payload` of the provided `callback` function.
 * @returns {value is Key} The return value is a `boolean` indicating whether the `value` is a `string`, `number`, or `symbol`.
 */
export const guardKey = <Key extends PropertyKey, Payload extends object>(
  value: Key,
  callback?: ResultCallback<Key, Payload>,
  payload?: Payload
): value is Key => isKey(value, callback, payload);
