// Function.
import { isString } from '@typescript-package/is';
// Type.
import { AnyString, ResultCallback } from '@typescript-package/type';
/**
 * @description Guards the value to be `string` of any type.
 * @template {AnyString} Type
 * @template {object} [Payload=object]
 * @param {Type} value The value of a generic type variable `Type` constrained by the `AnyString`, by default of the type captured from itself to
 * guard.
 * @param {?ResultCallback<Type, Payload>} [callback] An optional `ResultCallback` function to handle the result before returns.
 * @param {?Payload} [payload] Optional `object` of generic type variable `Payload` is assigned to the `payload` of the provided `callback` function.
 * @returns {value is Type} The return value is a `boolean` indicating whether the `value` is a `string` type or an instance of `String`.
 */
export const guardString = <
  Type extends AnyString,
  Payload extends object = object
>(
  value: Type,
  callback?: ResultCallback<Type, Payload>,
  payload?: Payload
): value is Type => isString(value, callback, payload);
