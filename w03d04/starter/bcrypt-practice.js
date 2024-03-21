const bcrypt = require('bcryptjs');



// bcrypt.genSalt(10, (err, salt) => {
//   console.log('async salt', salt);
// });

// bcrypt.genSalt(10)
//   .then((salt) => {
//     console.log('promise salt', salt);
//   });

const password = 'secret';

const salt = bcrypt.genSaltSync(10);

// console.log('salt:', salt);

const hash = bcrypt.hashSync(password, salt);

// console.log('hash:', hash);

const hashedPassword = '$2a$10$lYcHUbos4lEgq2Q1.iEkT.Csu794z8gv4M1i4gnT7ECBFf.kmPZ1K';

const result = bcrypt.compareSync('secret', hashedPassword);

console.log('result', result);
