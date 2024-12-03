// Import: Object.
import { guardIs } from './guard-is.object';
// Import: Interface.
import { Guard } from '../interface/guard-interface';
/**
 * @description
 * @type {Guard}
 */
export const guard: Guard = Object.freeze({ ...guardIs });
