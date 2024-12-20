// Function.
import { isStringLengthBetween } from '@typescript-package/is';
// Type.
import { AnyString, ResultCallback, StringOfLength } from '@typescript-package/type';
/**
 * @description Guards the value to be `string` or `String` instance of a length between the specified range.
 * @template {AnyString} Type
 * @template {number} Min
 * @template {number} Max
 * @template {object} [Payload=object]
 * @param {Type} value The value of a generic type variable `Type` constrained by `AnyString`, by default of the type captured from itself to
 * guard.
 * @param {Min} min The **minimum** length of generic type variable `Min` of a given `value`.
 * @param {Max} max The **maximum** length of generic type variable `Max` of a given `value`.
 * @param {?ResultCallback<Type, { min: Min; max: Max } & Payload>} [callback] An optional `ResultCallback` function to handle the result before returns.
 * @param {?Payload} [payload] Optional `object` of generic type variable `Payload` is assigned to the `payload` of the provided `callback` function.
 * @returns {value is StringOfLength<Min, Max, Type>} The return value is a `boolean` indicating whether the `value` is a `string` type or an instance of `String` of a length between
 * the specified range.
 */
export const guardStringLengthBetween = <
  Type extends AnyString,
  Min extends number,
  Max extends number,
  Payload extends object = object
>(
  value: Type,
  min: Min,
  max: Max,
  callback?: ResultCallback<Type, { min: Min; max: Max } & Payload>,
  payload?: Payload
): value is StringOfLength<Min, Max, Type> =>
  isStringLengthBetween(value, min, max, callback, payload);
