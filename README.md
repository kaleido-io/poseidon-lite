# poseidon-lite

A stripped down poseidon implementation pulled from circomlibjs.

## Use

```js
import poseidon from 'poseidon-lite'
// pass an array to the function
// array length must be >= 1, and <= 16
// returns a BigInt
const hash = poseidon(['0x01', '0x02'])
```

## Build

```sh
npm i
npm run build
npm test
```
