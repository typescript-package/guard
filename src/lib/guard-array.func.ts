// Function.
import { isArray } from '@typescript-package/is';
// Type.
import { ResultCallback } from '@typescript-package/type';
/**
 * @description Guards the value to be an `array` of a generic type variable `Type`.
 * @template Type
 * @template {object} [Payload=object]
 * @param {Array<Type>} value An `array` of generic type variable `Type` to guard.
 * @param {?ResultCallback<Array<Type>, Payload>} [callback] An optional `ResultCallback` function to handle the result before returns.
 * @param {?Payload} [payload] Optional `object` of generic type variable `Payload` is assigned to the `payload` of the provided `callback` function.
 * @returns {value is Array<Type>} The return `value` is a `boolean` indicating whether the `value` is an `array` of a generic type variable `Type`.
 */
export const guardArray = <Type, Payload extends object = object>(
  value: Array<Type>,
  callback?: ResultCallback<Array<Type>, Payload>,
  payload?: Payload
): value is Array<Type> => isArray(value, callback, payload);
