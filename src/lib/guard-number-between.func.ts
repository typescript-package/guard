// Function.
import { isNumberBetween } from '@typescript-package/is';
// Type.
import { AnyNumber, NumberBetween, ResultCallback } from '@typescript-package/type';
/**
 * @description Guards the value to be `number` type or instance of `Number` between the specified range.
 * @template {AnyNumber} Type
 * @template {number} Min
 * @template {number} Max
 * @template {object} [Payload=object]
 * @param {Type} value The value of a generic type variable `Type` to guard.
 * @param {Min} min The **minimum** range of generic type variable `Min` for a given `value`.
 * @param {Max} max The **maximum** range of generic type variable `Max` for a given `value`.
 * @param {?ResultCallback<Type, { min: Min; max: Max } & Payload>} [callback] An optional `ResultCallback` function to handle the result before returns.
 * @param {?Payload} [payload] Optional `object` of generic type variable `Payload` is assigned to the `payload` of the provided `callback` function.
 * @returns {value is NumberBetween<Min, Max, Type>} The return value is a `boolean` indicating whether the `value` is a `number` type or an instance of `Number` between the
 * specified range.
 */
export const guardNumberBetween = <
  Type extends AnyNumber,
  Min extends number,
  Max extends number,
  Payload extends object = object
>(
  value: Type,
  min: Min,
  max: Max,
  callback?: ResultCallback<Type, { min: Min; max: Max } & Payload>,
  payload?: Payload
): value is NumberBetween<Min, Max, Type> =>
  isNumberBetween(value, min, max, callback, payload);
