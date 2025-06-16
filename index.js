// // square
// function squareArea(side) {
//   return side * side;
// }
// const result = squareArea(6);
// console.log(result);
// // rectangle
// function rectangle(length, breadth) {
//   return length * breadth;
// }
// const result2 = rectangle(5, 8);
// console.log(result2);

// // triangle

// function triangle(base, hieght) {
//   return (1 / 2) * base * hieght;
// }
// const result3 = triangle(4, 6);
// console.log(result3);

// // circle
// function circle(pi, radius) {
//   return pi * radius * radius;
// }
// const result4 = circle(3.144, 4);
// console.log(result4);

// paralleogram
function paralleogram(base , height) {
  return base * height;
}
const result5 = paralleogram(8, 9);
console.log(result5);

function multiplier(fresult, multi) {
  return fresult * multi
}
const finalresult = multiplier(result5,20)
console.log(finalresult);




const color = document.getElementById("box1");
const targetBox = document.getElementById("box2");

color.addEventListener("click", change);

function change() {
  targetBox.style.backgroundColor = "red";
}
