const numbers = [3, 4, 5, 6, 7, 8]


//=====  1st
numbers.map(function (element, index, array) {
  console.log(element, index, array);
});

//======2nd
const result = numbers.map(function (element, index, array) {
  // console.log(element, index, array);
  return element * element;
});
console.log("2nd: ", result)


//======3rd

function square(element) {
  return element * element;
}
const result1 = numbers.map(square);
console.log("result1", result1);

//=======    4th
const square1 = element => element * element;
const result2 = numbers.map(square1);
console.log(result2);


//=========  5th
const result3 = numbers.map(element => element * element);
console.log("result3", result3)

//=========  6th
const bigger = numbers.filter(element => element < 6)  //filter number ta dai..
console.log(bigger);

//=========  7th
const isThere = numbers.filter(element => element > 7)
console.log(isThere);


//=========  8th
const find = numbers.find(element => element > 5)
console.log(find);

//===========   practice              ============================================
const gpa = [75, 70, 88, 70, 90];

const gpaResult = gpa.map(function (element) {
  console.log(element);
})