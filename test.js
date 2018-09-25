import test from 'ava';
import { asyncCounter } from '.';

test('e2e', async t => {
    let countTimes = 3;
    const counter = asyncCounter(countTimes);
    for (; countTimes > 0; countTimes--) {
        setTimeout(() => counter.count().then(count => console.log(`${count} of ${counter.countTimes} times`), countTimes * 500));
    }
    await counter.finished;
    t.pass();
});
