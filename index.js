class AsyncCounter {
  constructor(max) {
    this.max = max;
    this.finished = new Promise(resolve => {
      let current = 0;
      this.count = () => {
        if (++current >= this.max) {
          resolve();
        }
        return current;
      };
    });
  }
}

const asyncCounter = max => new AsyncCounter(max);

module.exports = Object.assign(asyncCounter, {
  AsyncCounter,
  asyncCounter,
  default: asyncCounter
});
