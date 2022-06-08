// Sort() , Filter() Vs Map() Vs Reduce()

const number = [22, 54, 4, 56, 76];

// Sort()----------->// Arranged on ASCII Values

// let result = number.sort();
// console.log(result);

// Find()------->// Finding only first greatest value

// let result = number.find((value) => {
//   return value > 50;
// });
// console.log(result);

// Filter----------->// Filtering all the elements

// let result = number.filter((value) => {
//   return value > 50;
// });
// console.log(result);

// Map------------->// It gives new Array Elements frm Parent Array

// let result = number.map((value) => {
//   return "#" + value * 2;
// });
// console.log(result);

// Reduce----------->//It reduce the given value

let result = number.reduce((acc, curVal) => {
  return acc * curVal;
});
console.log(result);
