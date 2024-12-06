// Function.
import { isDate } from '@typescript-package/is';
// Type.
import { ResultCallback } from '@typescript-package/type';
/**
 * @description Guards the value to be a date.
 * @template {object} Payload
 * @param {Date} value The value of `Date` type to guard.
 * @param {?ResultCallback<Date, Payload>} [callback] An optional `ResultCallback` function to handle the result before returns.
 * @param {?Payload} [payload] Optional `object` of generic type variable `Payload` is assigned to the `payload` of the provided `callback` function.
 * @returns {value is Date} The return value is a `boolean` indicating whether the value is a date.
 */
export const guardDate = <Payload extends object>(
  value: Date,
  callback?: ResultCallback<Date, Payload>,
  payload?: Payload
): value is Date => isDate(value, callback, payload);
