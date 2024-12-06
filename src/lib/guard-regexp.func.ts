// Function.
import { isRegExp } from '@typescript-package/is';
// Type.
import { ResultCallback } from '@typescript-package/type';
/**
 * @description Guards the value to be a `RegExp`.
 * @template {RegExp} Type
 * @template {object} Payload
 * @param {Type} value Regular expression of generic type variable `Type` constrained by `RegExp` to guard.
 * @param {?ResultCallback<Type, Payload>} [callback] An optional `ResultCallback` function to handle the result before returns.
 * @param {?Payload} [payload] Optional `object` of generic type variable `Payload` is assigned to the `payload` of the provided `callback` function.
 * @returns {value is Type} The return `value` is a `boolean` indicating whether the `value` is a `RegExp`.
 */
export const guardRegExp = <Type extends RegExp, Payload extends object>(
  value: Type,
  callback?: ResultCallback<Type, Payload>,
  payload?: Payload
): value is Type => isRegExp(value, callback, payload);
