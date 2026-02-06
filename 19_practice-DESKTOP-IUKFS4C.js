const counter = (function() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    value: () => count
  };
})();

console.log(counter.increment()); // 1
console.log(counter.decrement()); // 2
console.log(counter.value());     // 2
