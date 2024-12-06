// Function.
import { isObjectKeys } from '@typescript-package/is';
// Type.
import { ResultCallback } from '@typescript-package/type';
/**
 * @description Guards the value to be an `object` of a generic type variable `Obj` with its specified `keys`.
 * @template {object} Obj
 * @template {keyof Obj} Key
 * @template {object} [Payload=object]
 * @param {Obj} value An object of a generic type variable `Obj`, by default of the type captured from itself that contains the given `keys` to
 * guard.
 * @param {Key[]} keys An `Array` of property keys to check whether the given `value` contains.
 * @param {?ResultCallback<Obj, { keys: typeof keys } & Payload>} [callback] An optional `ResultCallback` function to handle the result before returns.
 * @param {?Payload} [payload] Optional `object` of generic type variable `Payload` is assigned to the `payload` of the provided `callback` function.
 * @returns {value is Obj} The return value is a `boolean` indicating whether the `value` is an `object` with its specified `keys`.
 */
export const guardObjectKeys = <
  Obj extends object,
  Key extends keyof Obj,
  Payload extends object = object
>(
  value: Obj,
  keys: Key[],
  callback?: ResultCallback<Obj, { keys: typeof keys } & Payload>,
  payload?: Payload
): value is Obj => isObjectKeys(value, keys, callback, payload as any);
