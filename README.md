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
import asyncCounter from 'async-counter';

const counter = asyncCounter(2);

// Inside an async block
const logWhenFinished = async () => {
    await counter.finished;
    console.log('finished counting');
};

// Somewhere else, async code
setTimeout(() => counter.count(), 500);
setTimeout(() => counter.count(), 1000);
// `counter.finished` resolves the second time `count` is called
```

### API

```js
let countTimes = 3;
const counter = asyncCounter(countTimes, {
  onFinished: max => console.log(`Finished counting to ${max}!`),
  onCount: ({payload, max, current}) => console.log(`${payload.date.toString()}: ${current} of ${max} times`)
});
for (; countTimes > 0; countTimes--) {
   setTimeout(() => counter.count({date: new Date()}), countTimes * 1000);
}
```

### License
[MIT](https://github.com/assister-ai/async-counter/blob/master/LICENSE)
