// Function.
import { isInstance } from '@typescript-package/is';
// Type.
import { Constructor, ResultCallback } from '@typescript-package/type';
/**
 * @description Guards the value to be an instance of the given `constructor`.
 * @template {object} Obj
 * @template {object} [Payload=object]
 * @param {Obj} value An `object` of a generic type variable `Obj` to guard and be compared with an instance of a given `constructor`.
 * @param {Constructor<Obj>} constructor A `class` or `function` that specifies the type of the `constructor`.
 * @param {?ResultCallback<Obj, { ctor: typeof constructor } & Payload>} [callback] An optional `ResultCallback` function to handle the result before returns.
 * @param {?Payload} [payload] Optional `object` of generic type variable `Payload` is assigned to the `payload` of the provided `callback` function.
 * @returns {value is Obj} The return value is a `boolean` indicating whether the `value` is an instance of a given `constructor`.
 */
export const guardInstance = <
  Obj extends object,
  Payload extends object = object
>(
  value: Obj,
  constructor: Constructor<Obj>,
  callback?: ResultCallback<Obj, { ctor: typeof constructor } & Payload>,
  payload?: Payload
): value is Obj => isInstance(value, constructor, callback, payload);
