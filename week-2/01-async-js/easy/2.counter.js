let count = 0;
let timeoutId;

function increment() {
  count++;
  console.log(count);

  timeoutId = setTimeout(increment, 1000);
}

increment();