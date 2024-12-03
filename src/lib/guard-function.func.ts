// Function.
import { isFunction } from '@typescript-package/is';
// Type.
import { ResultCallback } from '@typescript-package/type';
/**
 * @description Guards the value to be a `Function`.
 * @template {Function} Type 
 * @template {object} Payload
 * @param {Type} value The `function` of a generic type variable `Type` to guard.
 * @param {?ResultCallback<Type, Payload>} [callback] An optional `ResultCallback` function to handle the result before returns.
 * @param {?Payload} [payload] Optional `object` of generic type variable `Payload` is assigned to the `payload` of the provided `callback` function.
 * @returns {value is Type} The return value is a `boolean` indicating whether the `value` is a `Function`.
 */
export const guardFunction = <Type extends Function, Payload extends object>(
  value: Type,
  callback?: ResultCallback<Type, Payload>,
  payload?: Payload
): value is Type => isFunction(value, callback, payload);
