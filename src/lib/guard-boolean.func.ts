// Function.
import { isBoolean } from '@typescript-package/is';
// Type.
import { AnyBoolean, ResultCallback } from '@typescript-package/type';
/**
 * @description Guards the value to be `boolean` of any type.
 * @template {AnyBoolean} Type
 * @template {object} [Payload=object]
 * @param {Type} value The value of generic type variable `Type` to guard.
 * @param {?ResultCallback<Type, Payload>} [callback] An optional `ResultCallback` function to handle the result before returns.
 * @param {?Payload} [payload] Optional `object` of generic type variable `Payload` is assigned to the `payload` of the provided `callback` function.
 * @returns {value is Type} The return value is a `boolean` indicating whether the `value` is a `boolean` type or an instance of `Boolean`.
 */
export const guardBoolean = <
  Type extends AnyBoolean,
  Payload extends object = object
>(
  value: Type,
  callback?: ResultCallback<Type, Payload>,
  payload?: Payload
): value is Type => isBoolean(value, callback, payload);
