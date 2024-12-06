// Function.
import { isBigInt } from '@typescript-package/is';
// Type.
import { ResultCallback } from '@typescript-package/type';
/**
 * @description Guards the value to be a `bigint`.
 * @template {bigint} BigInt
 * @template {object} [Payload=object]
 * @param {BigInt} value A `bigint` type value to guard.
 * @param {?ResultCallback<BigInt, Payload>} [callback] An optional `ResultCallback` function to handle the result before returns.
 * @param {?Payload} [payload] Optional `object` of generic type variable `Payload` is assigned to the `payload` of the provided `callback` function.
 * @returns {value is BigInt} The return `value` is a `boolean` indicating whether the `value` is a `bigint`.
 */
export const guardBigInt = <
  BigInt extends bigint,
  Payload extends object = object
>(
  value: BigInt,
  callback?: ResultCallback<BigInt, Payload>,
  payload?: Payload
): value is BigInt => isBigInt(value, callback, payload);
