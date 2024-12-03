// Function.
import { isStringLength } from '@typescript-package/is';
// Type.
import { AnyString, ResultCallback, StringOfLength } from '@typescript-package/type';
/**
 * @description Guards the value to be `string` type or `String` instance of a specified length.
 * @template {AnyString} Type
 * @template {number} Length
 * @template {object} [Payload=object]
 * @param {Type} value The value of a generic type variable `Type` constrained by `AnyString`, by default of the type captured from itself to
 * guard.
 * @param {Length} length The **length** of generic type variable `Length` of a given `value`.
 * @param {?ResultCallback<Type, { length: Length } & Payload>} [callback] An optional `ResultCallback` function to handle the result before returns.
 * @param {?Payload} [payload] Optional `object` of generic type variable `Payload` is assigned to the `payload` of the provided `callback` function.
 * @returns {value is StringOfLength<Length, Length, Type>} The return value is a `boolean` indicating whether the `value` is a `string` type or an instance of `String` of a specified
 * `length`.
 */
export const guardStringLength = <
  Type extends AnyString,
  Length extends number,
  Payload extends object = object
>(
  value: Type,
  length: Length,
  callback?: ResultCallback<Type, { length: Length } & Payload>,
  payload?: Payload
): value is StringOfLength<Length, Length, Type> =>
  isStringLength(value, length, callback, payload);

