// Function.
import {
  guardArray,
  guardBigInt,
  guardBoolean,
  guardClass,
  guardDate,
  guardDefined,
  guardFalse,
  guardFunction,
  guardInstance,
  guardKey,
  guardNull,
  guardNumber,
  guardNumberBetween,
  guardObject,
  guardObjectKey,
  guardObjectKeyIn,
  guardObjectKeys,
  guardObjectKeysIn,
  guardObjectSomeKeys,
  guardPrimitive,
  guardRegExp,
  guardString,
  guardStringIncludes,
  guardStringIncludesSome,
  guardStringLength,
  guardStringLengthBetween,
  guardSymbol,
  guardTrue,
  guardType,
  guardUndefined
} from '../lib';
// Export: Interface.
export interface Guard {
  /**
   * Guards the value to be an `array` of a generic type variable `Type`.
   */
  array: typeof guardArray;
  /**
   * Guards the value to be a `bigint`.
   */
  bigint: typeof guardBigInt;
  /**
   * Guards the value to be `boolean` of any type.
   */
  boolean: typeof guardBoolean;
  /**
   * Guards the value to be a `class` of generic type variable `Class`.
   */
  class: typeof guardClass;
  /**
   * Guards the value to be a date.
   */
  date: typeof guardDate;
  /**
   * Guards the value to be defined, not `undefined`.
   */
  defined: typeof guardDefined;
  /**
   * Guards the provided value to be `false`.
   */
  false: typeof guardFalse;
  /**
   * Guards the value to be a `Function`.
   */
  function: typeof guardFunction;
  /**
   * Guards the value to be an instance of the given `constructor`.
   */
  instance: typeof guardInstance;
  /**
   * Guards the value to be one of `string`, `number`, or `symbol` type.
   */
  key: typeof guardKey;
  /**
   * Guards the value to be `null`.
   */
  null: typeof guardNull;
  /**
   * Guards the value to be a `number` of any type.
   */
  number: typeof guardNumber;
  /**
   * Guards the value to be `number` between the specified range.
   */
  numberBetween: typeof guardNumberBetween;
  /**
   * Guards the value to be an `object` of a generic type variable `Obj`.
   */
  object: typeof guardObject;
  /**
   * Guards the value to be an `object` of generic type variable `Obj` that contains the given `key`.
   */
  objectKey: typeof guardObjectKey;
  /**
   * Guards the value to be an `object` of a generic type variable `Obj` that contains(or its prototype chain) the given `key`.
   */
  objectKeyIn: typeof guardObjectKeyIn;
  /**
   * Guards the value to be an `object` of a generic type variable `Obj` with its specified `keys`.
   */
  objectKeys: typeof guardObjectKeys;
  /**
   * Guards the value to be an `object` of a generic type variable `Obj` with specified keys in it(or its prototype chain).
   */
  objectKeysIn: typeof guardObjectKeysIn;
  /**
   * Guards the value to be an `object` of a generic type variable `Obj` with its specified `keys`.
   */
  objectSomeKeys: typeof guardObjectSomeKeys;
  /**
   * Guards the value to be the `Primitive` type or the given `type` of the `Primitives`.
   */
  primitive: typeof guardPrimitive;
  /**
   * Guards the value to be a `RegExp`.
   */
  regexp: typeof guardRegExp;
  /**
   * Guards the value to be `string` of any type.
   */
  string: typeof guardString;
  /**
   * Guards the value to be a `string` type or an instance of `String` that includes all of the specified words/sentences.
   */
  stringIncludes: typeof guardStringIncludes;
  /**
   * Guards the value to be a `string` type or an instance of `String` that includes some of the specified words/sentences.
   */
  stringIncludesSome: typeof guardStringIncludesSome;
  /**
   * Guards the value to be `string` type or `String` instance of a specified length.
   */
  stringLength: typeof guardStringLength;
  /**
   * Guards the value to be `string` or `String` instance of a length between the specified range.
   */
  stringLengthBetween: typeof guardStringLengthBetween;
  /**
   * Guards the value to be a `symbol`.
   */
  symbol: typeof guardSymbol;
  /**
   * Guards the value to be `true`.
   */
  true: typeof guardTrue;
  /**
   * Guards the value to be a type from a given `type`.
   */
  type: typeof guardType;
  /**
   * Guards the value to be `undefined`.
   */
  undefined: typeof guardUndefined;
}
