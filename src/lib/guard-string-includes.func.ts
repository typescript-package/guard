// Function.
import { isStringIncludes } from '@typescript-package/is';
import { resultCallback } from '@typescript-package/core';
// Type.
import { AnyString, ResultCallback } from '@typescript-package/type';
/**
 * Guards the value to be a `string` type or an instance of `String` that includes the specified words/sentences.
 * @param value The value of a generic type variable `Type` constrained by the `AnyString`, by default of the type captured from itself to
 * check against the `string` that contains words/sentences from a given `includes`.
 * @param includes An `Array` of `string` as words/sentences to be case-sensitive searched for within the given `value`.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @param payload Optional `object` of generic type variable `Payload` is assigned to the `payload` of the provided `callback` function.
 * @returns The return value is a `boolean` indicating whether the provided `value` is a `string` type or an instance of `String` that
 * includes the specified words/sentences.
 */
export const guardStringIncludes = <
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
): value is Type => isStringIncludes(value, includes, callback, payload);
