// updating arrays and objects

// old state vs new state (===)

// const nums = [1,2,3];
// const another = [4,5,6];

// // const copy = nums; // copying the reference
// // const copy = nums.filter(() => true);
// // const copy = nums.map((e) => e);

// // spread operator (...) right hand side of the equals sign

// const copy = [ ...nums, 4 ];

// // copy.push(4);

// console.log(nums);
// console.log(copy);

const user = {
  username: 'alice',
  age: 42,
  sports: ['badminton']
};


// const copy = user;

const copy = {
  ...user,
  username: 'bob',
  sports: [
    ...user.sports,
    'curling',
  ]
};

// copy.sports.push('curling');

// copy.username = 'bob';

console.log(user);
console.log(copy);
