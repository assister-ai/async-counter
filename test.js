import test from 'ava';
import {asyncCounter} from '.';

test('e2e', t => {
  let countTimes = 3;
  const counter = asyncCounter(countTimes, {
    onFinished: max => {
      console.log(`Finished counting to ${max}!`);
      t.pass();
    },
    onCount: ({payload, max, current}) => console.log(`${payload.date.toString()}: ${current} of ${max} times`)
  });

  for (; countTimes > 0; countTimes--) {
    setTimeout(() => counter.count({date: new Date()}), countTimes * 1000);
  }

  return counter.finished;
});
