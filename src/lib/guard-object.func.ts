// Function.
import { isObject } from '@typescript-package/is';
// Type.
import { ResultCallback } from '@typescript-package/type';
/**
 * @description Guards the value to be an `object` of a generic type variable `Obj`.
 * @template {object} Obj
 * @template {object} [Payload=object]
 * @param {Obj} value An `object` of a generic type variable `Obj`, by default of the type captured from itself to guard.
 * @param {?ResultCallback<Obj, Payload>} [callback] An optional `ResultCallback` function to handle the result before returns.
 * @param {?Payload} [payload] Optional `object` of generic type variable `Payload` is assigned to the `payload` of the provided `callback` function.
 * @returns {value is Obj} The return value is a `boolean` indicating whether the provided `value` is an `object` of a generic type variable `Obj`.
 */
export const guardObject = <
  Obj extends object,
  Payload extends object = object
>(
  value: Obj,
  callback?: ResultCallback<Obj, Payload>,
  payload?: Payload
): value is Obj => isObject(value, callback, payload);
