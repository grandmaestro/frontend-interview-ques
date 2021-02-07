/**
 * Problem Statement: Implement a custom set timeout
 */

function customTimeout(cb, delayInMs) {
  const interval = setInterval(() => {
    cb();
    clearInterval(interval);
  }, delayInMs);
}

customTimeout(() => { console.log('Custom Execution') }, 2000);
setTimeout(() => { console.log('SetTimeout Execution') }, 500);