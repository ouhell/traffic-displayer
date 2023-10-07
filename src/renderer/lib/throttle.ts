/* eslint-disable  */
export function throttle<A extends any[], R>(
  fn: (...args: A) => Promise<R> | R,
  ms: number = 100
) {
  let queuedFnCall = false;

  let queuedFnCallArgs: A;
  let runningPromise: Promise<R> | null = null;

  function invokeFn(fnArgs: A) {
    if (runningPromise === null) {
      runningPromise = new Promise<R>((resolve, reject) => {
        const fnPromise = fn.apply(fnArgs);

        Promise.allSettled([wait(ms), fnPromise]).then((results) => {
          runningPromise = null;

          if (queuedFnCall) {
            queuedFnCall = false;
            invokeFn(queuedFnCallArgs).then(resolve).catch(reject);
          } else if (results[1].status === 'fulfilled') {
            resolve(results[1].value);
          } else {
            reject(results[1].reason);
          }
        });
      });
    } else {
      queuedFnCall = true;

      queuedFnCallArgs = fnArgs;
    }

    return runningPromise;
  }

  return function (...args: A) {
    return invokeFn(args);
  };
}

function wait(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}
