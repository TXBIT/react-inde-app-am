'use strict';

// const square = function (x) {
//   return x * x;
// };

// function square2(x) {
//   return x * x;
// }

// // const squareArrow = (x) => {
// //   return x * x;
// // };

// const squareArrow = (x) => x * x;

// console.log(square(8));
// console.log(square2(10));
// console.log(squareArrow(12));

// Challenge - Use arrow functions
// getFirstName('Mike Smith') -> 'Mike'
// Create regular arrow function
// Create arrow function using shorthand syntax
var getFirstName = function getFirstName(fullName) {
  return fullName.split(' ')[0];
};

var getFirstName2 = function getFirstName2(fullName) {
  return fullName.split(' ')[0];
};

console.log(getFirstName('First Name'));
console.log(getFirstName2('First2 Name'));
