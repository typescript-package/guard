// Function.
import { isDefined } from '@typescript-package/is';
// Type.
import { Defined, ResultCallback } from '@typescript-package/type';
/**
 * Guards the value to be defined, not `undefined`.
 * @param value The value of generic type `Defined<Type>`, never undefined type captured from itself to guard against `undefined`.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @param payload Optional `object` of generic type variable `Payload` is assigned to the `payload` of the provided `callback` function.
 * @returns The return value is a `boolean` indicating whether the `value` is defined.
 */
export const guardDefined = <Type, Payload extends object = object>(
  value: Defined<Type>,
  callback?: ResultCallback<Defined<Type>, Payload>,
  payload?: Payload
): value is Defined<Type> => isDefined(value, callback, payload);
