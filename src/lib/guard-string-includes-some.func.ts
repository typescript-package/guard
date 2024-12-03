// Function.
import { isStringIncludesSome } from '@typescript-package/is';
import { resultCallback } from '@typescript-package/core';
// Type.
import { AnyString, ResultCallback } from '@typescript-package/type';
/**
 * @description Guards the value to be a `string` type or an instance of `String` that includes some of the specified words/sentences.
 * @template {AnyString} Type
 * @template {object} [Payload=object]
 * @param {Type} value The value of a generic type variable `Type` constrained by the `AnyString`, by default of the type captured from itself to
 * check against the `string` that contains some of the words/sentences from a given `includes`.
 * @param {string[]} includes An `Array` of `string` as words/sentences to be case-sensitive searched for within the given `value`.
 * @param {ResultCallback<
 *     Type,
 *     { includes: typeof includes } & Payload
 *   >} [callback=resultCallback] An optional `ResultCallback` function to handle the result before returns.
 * @param {?Payload} [payload] Optional `object` of generic type variable `Payload` is assigned to the `payload` of the provided `callback` function.
 * @returns {value is Type} The return value is a `boolean` indicating whether the provided `value` is a `string` type or an instance of `String` that
 * includes all of the specified words/sentences.
 */
export const guardStringIncludesSome = <
  Type extends AnyString,
  Payload extends object = object
>(
  value: Type,
  includes: string[],
  callback: ResultCallback<
    Type,
    { includes: typeof includes } & Payload
  > = resultCallback,
  payload?: Payload
): value is Type => isStringIncludesSome(value, includes, callback, payload);
