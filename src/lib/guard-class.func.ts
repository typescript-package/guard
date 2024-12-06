// Function.
import { isClass } from '@typescript-package/is';
// Type.
import { ResultCallback } from '@typescript-package/type';
/**
 * @description Guards the value to be a `class` of generic type variable `Class`.
 * @template {Function} Class
 * @template {object} [Payload=object]
 * @param {Class} value The `class` of a generic type variable `Class` to guard.
 * @param {?ResultCallback<Class, Payload>} [callback] An optional `ResultCallback` function to handle the result before returns.
 * @param {?Payload} [payload] Optional `object` of generic type variable `Payload` is assigned to the `payload` of the provided `callback` function.
 * @returns {value is Class} The return value is a `boolean` indicating whether the provided `value` is a `class` of a generic type variable `Class`.
 */
export const guardClass = <
  Class extends Function,
  Payload extends object = object
>(
  value: Class,
  callback?: ResultCallback<Class, Payload>,
  payload?: Payload
): value is Class => isClass(value, callback, payload);
