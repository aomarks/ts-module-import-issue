// This import fails with:
//   example.ts(4,21): error TS2307: Cannot find module 'foo/bar'.
import {barFn} from 'foo/bar';
console.log(barFn());

// This import succeeds. It also causes the above import to resolve, since the
// two modules are declared in the same typings file.
// import {fooFn} from 'foo';
// console.log(fooFn());
