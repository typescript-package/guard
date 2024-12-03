<a href="https://www.typescriptlang.org/">
  <img
    src="https://raw.githubusercontent.com/typescript-package/core/refs/heads/main/ts-package-barcode-logo-512.png"
    width="20%"
    title="@typescript-package/guard"
  />
</a>

## typescript-package/guard

Type-safe guards for guarding value types in TypeScript.

<!-- npm badge -->
[![npm version][typescript-package-npm-badge-svg]][typescript-package-npm-badge]
[![GitHub issues][typescript-package-badge-issues]][typescript-package-issues]
[![GitHub license][typescript-package-badge-license]][typescript-package-license]

<br>

## Table of contents

* [Installation](#installation)
* [Api](#api)
* [Benefits](#benefits)
* [Type](#type)
  * [Enforce](#enforce)
  * [Indicate](#indicate)
  * [Check](#check)
  * [Guard](#guard)
  * [Narrow](#narrow)
  * [Summary](#summary)
* [Git](#git)
  * [Commit](#commit)
  * [Versioning](#versioning)
* [License](#license)

## Installation

```bash
npm install @typescript-package/guard
```

## Api

```typescript
import {
  // `guard` object.
  guard,

  // Prefixed `guard` functions.
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
} from '@typescript-package/guard';
```

## Benefits

Benefits of properly using the guards.

1. Development, compile and runtime **validation**.
    * Development-time **validation** ensures the developer can only provide a specific type through the static typing in the IDE.
    * Compile-time **validation** performs static analysis during compilation, ensuring no type violations are present in the code.
    * Runtime **validation** confirms the type of a value at runtime, especially useful when working with data from external sources (e.g., APIs, user inputs).

2. Type-safe code.
    * **Validates** external or dynamic data at runtime.
    * **Ensures** developers write type-safe code.

3. Error **reduction** and **prevention**.
    * **Error reduction** by combining static analysis and runtime checks.
    * **Error prevention** by combining runtime validation with compile-time type checks reduces the risk of runtime errors due to unexpected types.

4. **Enhanced code clarity** by reducing ambiguity in data types.

5. **Enhanced application reliability** by ensuring unvalidated data does not cause severe issues.

6. **Type safety layer** by ensuring handle of unexpected or invalid data.

## Type

### Enforce

A type enforce uses static typing to ensure only allowed types can be passed, and uses TypeScript's compile-time checks to enforce correctness.

**Role**: A development and compile-time type restrictor and enforcer.
**Scope**: Development and compile-time.
**Purpose**:

* Development and compile-time type **restriction** and **enforcement**.
* **Disallows** invalid types at development and compile-time, but doesn't inherently perform runtime checks, that is performed in the type checking.
* **Ensures** that only values of the specified type can be used before runtime.
* **Enforces** type restrictions during development (via IDE feedback) and compile-time. // (via static analysis).

Example:

```typescript
const acceptNumber = (value: number): void => {
  console.log(value);
};

acceptNumber(42);   // v Allowed
acceptNumber("42"); // x Development and compile-time error
```

### Indicate

Type indicate as the name suggest indicates the value type resulting in `boolean` type.

Example:

```typescript
const isNumber = (
  value: unknown
): value is number // type indicate
=> {
  return typeof value === "number"; // type check
} // type check
```

### Check

Operate only at runtime, allowing flexible validation of dynamically-typed or unknown values.

**Role**: Runtime checker.
**Scope**: Runtime only.
**Purpose**:

* **Checks** whether a given value is of a specific type during execution.
* Used to create the type narrow.

**Enforce**: o
**Restrict**: o
**Check**: v

### Guard

Combine development, and compile-time restriction with runtime validation, ensures the type of a value matches the expected type on any time, ensuring stricter enforcement of types.

**Role**: A development, compile, and run-time type restrictor and enforcer.
**Scope**: Development, compile, and run-time.
**Purpose**:

* **Ensures** the developer can only provide a specific type through the static typing.
* **Enforces** type restrictions during development (via IDE feedback) and compile-time.
* **Checks** whether a given value is of a specific type during execution.

**Enforce**: v
**Restrict**: v
**Check**: v

Example:

```typescript
const guardNumber = (
  value: number // type enforce
): value is number // type indicator
=> {
  return typeof value === "number"; // type check
} // overall type guard
```

### Narrow

It's a type-guard that ensures the narrowed type of a value matches the expected type on runtime.

**Role**: A development, compile, and run-time type narrower.
**Scope**: Development, compile-time, and runtime.
**Purpose**:

* Compile-time **restriction** and **enforcement**.
* **Reduces** or **refines** the possible types of a value within a specific scope.
* **Enables** precise typing based on context, such as conditional checks or type guards, affecting behavior at development, compile, and runtime.

**Enforce**: v
**Restrict**: v
**Narrow**: v

// Providing additional checks beyond type narrowing (e.g., custom business rules or value constraints).

Example:

```typescript
const processValue = (
  value: string | number // type enforce
): void => {
  if (typeof value === "string") {
    console.log(value.toUpperCase()); // Type narrowed to 'string'
  } else {
    console.log(value.toFixed(2)); // Type narrowed to 'number'
  }
}; // type narrow

processValue(42);     // v Logs: 42.00
processValue("hello"); // v Logs: HELLO
```

> It looks at these special checks (called type guards) and assignments, and the process of refining types to more specific types than declared is called narrowing. ["Typescript"](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)

### Summary

Time scope.

Feature  | Development-time | Compile-time | Runtime |
-------- | ---------------- | ------------ | ------- |
Enforce  |  v               | v            | x       |
Indicate |  v               | x            | x       |
Check    |  x               | x            | v       |
Guard    |  v               | v            | v       |
Narrow   |  v               | v            | v       |

## GIT

### Commit

* [AngularJS Git Commit Message Conventions][git-commit-angular]
* [Karma Git Commit Msg][git-commit-karma]
* [Conventional Commits][git-commit-conventional]

### Versioning

[Semantic Versioning 2.0.0][git-semver]

**Given a version number MAJOR.MINOR.PATCH, increment the:**

* MAJOR version when you make incompatible API changes,
* MINOR version when you add functionality in a backwards-compatible manner, and
* PATCH version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

**FAQ**
How should I deal with revisions in the 0.y.z initial development phase?

> The simplest thing to do is start your initial development release at 0.1.0 and then increment the minor version for each subsequent release.

How do I know when to release 1.0.0?

> If your software is being used in production, it should probably already be 1.0.0. If you have a stable API on which users have come to depend, you should be 1.0.0. If you’re worrying a lot about backwards compatibility, you should probably already be 1.0.0.

## License

MIT © typescript-package ([license][typescript-package-license])

<!-- This package: typescript-package  -->
  <!-- GitHub: badges -->
  [typescript-package-badge-issues]: https://img.shields.io/github/issues/typescript-package/guard
  [isscript-package-badge-forks]: https://img.shields.io/github/forks/typescript-package/guard
  [typescript-package-badge-stars]: https://img.shields.io/github/stars/typescript-package/guard
  [typescript-package-badge-license]: https://img.shields.io/github/license/typescript-package/guard
  <!-- GitHub: badges links -->
  [typescript-package-issues]: https://github.com/typescript-package/guard/issues
  [typescript-package-forks]: https://github.com/typescript-package/guard/network
  [typescript-package-license]: https://github.com/typescript-package/guard/blob/master/LICENSE
  [typescript-package-stars]: https://github.com/typescript-package/guard/stargazers
<!-- This package -->

<!-- Package: typescript-package -->
  <!-- npm -->
  [typescript-package-npm-badge-svg]: https://badge.fury.io/js/@typescript-package%2Fguard.svg
  [typescript-package-npm-badge]: https://badge.fury.io/js/@typescript-package%2Fguard

<!-- GIT -->
[git-semver]: http://semver.org/

<!-- GIT: commit -->
[git-commit-angular]: https://gist.github.com/stephenparish/9941e89d80e2bc58a153
[git-commit-karma]: http://karma-runner.github.io/0.10/dev/git-commit-msg.html
[git-commit-conventional]: https://www.conventionalcommits.org/en/v1.0.0/
