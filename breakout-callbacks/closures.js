// closure => a HOF where the inner function stores the environment of the outer function
const memoizationObj = {};

const HOF = (num) => {
  let count = 0;
  let age = 42;

  HOF(num, memoizationObj)

  return () => {
    count++;
    console.log(count);
  };
};

const increment = HOF(arg1);

// let i = 0;
// const name = 'alice';

// const increment = () => {
//   i++;
//   console.log(i);
// };

increment();
increment();
increment();
increment();
increment();
