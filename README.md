[![npm version](https://badge.fury.io/js/async-counter.svg)](https://www.npmjs.com/package/async-counter)
[![Build Status](https://api.travis-ci.org/assister-ai/async-counter.svg?branch=master)](https://travis-ci.org/assister-ai/async-counter)

# async-counter

An asynchronous counter for Node.js and the browser

### Install

```sh
npm i --save async-counter
```

### Usage

```js
const counter = asyncCounter(2);

// Inside an async block
await counter.finished;
console.log('finished counting');

// Somewhere else, async code
setTimeout(() => counter.count(), 500);
setTimeout(() => counter.count(), 1000);
// counter.finished resolves the second time it is called

```

### License
[MIT](https://github.com/assister-ai/async-counter/blob/master/LICENSE)
