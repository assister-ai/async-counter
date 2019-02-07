function asyncCounter(max, {
  onFinished = max => {},
  onCount = ({payload, max, current}) => {}
} = {}) {
  const counter = {};
  counter.finished = new Promise(resolve => {
    let current = 0;
    counter.count = payload => {
      if (++current >= max) {
        resolve(max);
      }

      onCount({payload, current, max});
      return current;
    };
  });
  counter.finished.then(onFinished);
  return counter;
}

module.exports = Object.assign(asyncCounter, {
  asyncCounter,
  default: asyncCounter
});
