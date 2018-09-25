class AsyncCounter {
    constructor(countTimes) {
      let currentCount = 0;
      this.countTimes = countTimes;
      this.ready = new Promise(resolveReady => {
        this.finished = new Promise(resolveFinished => {
          const count = () => {
            currentCount++;
            if (currentCount >= this.countTimes) {
              resolveFinished();
            }
            return currentCount;
          };
          this.count = () => this.ready.then(() => count());
          resolveReady();
        });
      });
    }
  }

  module.exports = {
      AsyncCounter,
      asyncCounter: (countTimes) => new AsyncCounter(countTimes)
  };
