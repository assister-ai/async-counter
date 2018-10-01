import test from 'ava';
import {asyncCounter} from '.';

test('e2e', t => {
  let countTimes = 3;
  const counter = asyncCounter(countTimes);
  const awaitFinish = async () => {
    await counter.finished;
    t.pass();
  };

  for (; countTimes > 0; countTimes--) {
    setTimeout(() => console.log(`${counter.count()} of ${counter.max} times`), countTimes * 500);
  }

  return awaitFinish();
});
