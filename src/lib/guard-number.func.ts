// Function.
import { isNumber } from '@typescript-package/is';
// Type.
import { AnyNumber, ResultCallback } from '@typescript-package/type';
/**
 * @description Guards the value to be a `number` of any type.
 * @template {AnyNumber} Type
 * @template {object} [Payload=object]
 * @param {Type} value The value of generic type variable `Type` to guard.
 * @param {?ResultCallback<Type, Payload>} [callback] An optional `ResultCallback` function to handle the result before returns.
 * @param {?Payload} [payload] Optional `object` of generic type variable `Payload` is assigned to the `payload` of the provided `callback` function.
 * @returns {value is Type} The return value is a `boolean` indicating whether the `value` is a `number` type or an instance of `Number`.
 */
export const guardNumber = <
  Type extends AnyNumber,
  Payload extends object = object
>(
  value: Type,
  callback?: ResultCallback<Type, Payload>,
  payload?: Payload
): value is Type => isNumber(value, callback, payload);
