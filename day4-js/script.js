// // callback function

// const sum = (a, b, callback) => {
//     //Higher order function
//     const ans = (a + b) ;
//     callback(ans);
// }

// const printpretty = (txt) => {
//     console.log("-----", txt, "-----");
// }

// sum(2, 3, printpretty);

// For each loop

// const arr = [1, 2, 3, 4, 5];
// arr.forEach((element) => {
//     console.log(element);
// });

// map

// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.map((element) => {
//     return element * 2;
// });

// reduce

const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((acc, element,ind,arr) => {
    console.log(acc, element, ind, arr);
    // return acc + element;
});

// if we did not pass the initial value of acc then the first element of the array will be the initial value of acc