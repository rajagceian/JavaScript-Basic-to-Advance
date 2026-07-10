console.log("1"); // sync

setTimeout(() => {
  console.log("From Task Queue"); // macrotask/Task Queue
}, 0);

Promise.resolve().then(() => {
  console.log("From Microtask Queue"); // microtask /Call back Queue
});

console.log("4"); // sync