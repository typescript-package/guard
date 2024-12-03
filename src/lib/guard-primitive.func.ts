// Function.
import { isPrimitive } from '@typescript-package/is';
// Type.
import { ResultCallback, Primitive, PrimitiveNames } from '@typescript-package/type';
/**
 * @description Guards the value to be the `Primitive` type or the given `type` of the `Primitives`.
 * @template {Primitive} Type
 * @template {object} [Payload=object]
 * @param {Type} value The value of a generic type variable `Type` constrained by the `Primitive`, by default of the type captured from itself to
 * guard.
 * @param {?PrimitiveNames} [type] An optional specific type of `Primitives` to check the given value.
 * @param {?ResultCallback<Type, Payload>} [callback] An optional `ResultCallback` function to handle the result before returns.
 * @param {?Payload} [payload] Optional `object` of generic type variable `Payload` is assigned to the `payload` of the provided `callback` function.
 * @returns {value is Type} The return value is a `boolean` indicating whether the `value` is the `Primitive` type or the given `type`.
 */
export const guardPrimitive = <
  Type extends Primitive,
  Payload extends object = object
>(
  value: Type,
  type?: PrimitiveNames,
  callback?: ResultCallback<Type, Payload>,
  payload?: Payload
): value is Type => isPrimitive(value, type, callback, payload);
