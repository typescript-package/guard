// Function.
import { isObjectKey } from '@typescript-package/is';
// Type.
import { ResultCallback } from '@typescript-package/type';
/**
 * @description Guards the value to be an `object` of generic type variable `Obj` that contains the given `key`.
 * @template {object} Obj
 * @template {keyof Obj} Key
 * @template {object} [Payload=object]
 * @param {Obj} value An `object` of a generic type variable `Obj`, by default of the type captured from itself that contains the given `key` to
 * guard.
 * @param {Key} key A key of generic type variable `Key` as the property name that the given `value` contains.
 * @param {?ResultCallback<Obj, { key: typeof key } & Payload>} [callback] An optional `ResultCallback` function to handle the result before returns.
 * @param {?Payload} [payload] Optional `object` of generic type variable `Payload` is assigned to the `payload` of the provided `callback` function.
 * @returns {value is Obj} The return value is a `boolean` indicating whether the `value` is an `object` of generic type variable `Obj` that contains the
 * given `key`.
 */
export const guardObjectKey = <
  Obj extends object,
  Key extends keyof Obj,
  Payload extends object = object
>(
  value: Obj,
  key: Key,
  callback?: ResultCallback<Obj, { key: typeof key } & Payload>,
  payload?: Payload
): value is Obj => isObjectKey(value, key, callback, payload as any);
