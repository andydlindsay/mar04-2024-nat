// arrays = c-style loop, for..in, for..of

// objects for..in

const studentObj = {
  name: 'alice',
  hasGraduated: false,
  cohort: 'mar 04 2024',
};

for (const key in studentObj) {
  const value = studentObj[key];
  console.log(value);
}
