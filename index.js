class AsyncCounter {
  constructor(max, onCount = ({payload, max, current}) => {}) {
    this.max = max;
    this.finished = new Promise(resolve => {
      let current = 0;
      this.count = (payload = null) => {
        if (++current >= this.max) {
          resolve();
        }
        onCount({payload, current, max: this.max});
        return current;
      };
    });
  }
}

const asyncCounter = (max, onCount = ({payload, max, current}) => {}) => new AsyncCounter(max, onCount);

module.exports = Object.assign(asyncCounter, {
  AsyncCounter,
  asyncCounter,
  default: asyncCounter
});
