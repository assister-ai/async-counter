import test from 'ava';
import {asyncCounter} from '.';

test('e2e', t => {
  let countTimes = 3;
  const counter = asyncCounter(countTimes,
    ({payload, max, current}) => console.log(`${payload.date.toString()}: ${current} of ${max} times`));
  const awaitFinish = async () => {
    await counter.finished;
    t.pass();
  };

  for (; countTimes > 0; countTimes--) {
    setTimeout(() => counter.count({date: new Date()}), countTimes * 1000);
  }

  return awaitFinish();
});
