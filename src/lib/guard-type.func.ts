// Function.
import { isType } from '@typescript-package/is';
// Type.
import { ResultCallback, Type, TypeNames } from '@typescript-package/type';
/**
 * @description Guards the value to be a type of given `type`.
 * @template {Type} T
 * @template {object} [Payload=object]
 * @param {T} value The value of a generic type variable `T` constrained by the `Type`, by default of the type captured from itself, to guard.
 * @param {TypeNames<T>} type The value of `string` or `Constructor` type of the `Types` indicates against which type a given `value` is checked.
 * @param {?ResultCallback<T, Payload>} [callback] An optional `ResultCallback` function to handle the result before returns.
 * @param {?Payload} [payload] Optional `object` of generic type variable `Payload` is assigned to the `payload` of the provided `callback` function.
 * @returns {value is T} The return value is a `boolean` indicating whether the `value` is a type from a given `type`.
 */
export const guardType = <T extends Type, Payload extends object = object>(
  value: T,
  type: TypeNames<T>,
  callback?: ResultCallback<T, Payload>,
  payload?: Payload
): value is T => isType(value, type, callback, payload);
