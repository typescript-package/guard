// Function.
import { isNull } from '@typescript-package/is';
// Type.
import { ResultCallback } from '@typescript-package/type';
/**
 * Guards the value to be `null`.
 * @param value The value of `null` type to guard.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @param payload Optional `object` of generic type variable `Payload` is assigned to the `payload` of the provided `callback` function.
 * @returns The return value is a `boolean` indicating whether the `value` is `null`.
 */
export const guardNull = <Payload extends object>(
  value: null,
  callback?: ResultCallback<null, Payload>,
  payload?: Payload
): value is null => isNull(value, callback, payload);
