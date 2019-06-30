// Divide and Conquer algorithms are recursive algorithms
// it's a way to think about a problem
// =========================================================

// function sum(arr) {
//     let total = 0;
//     for (let i of arr) {
//         total += i;
//     }
//     return total;
// }
// console.log(sum([1,2,3,4,5]));


// Need to think of what is the simplest form of the problem.
// For this one, the simplest form for an array is an empty array.
// Then what happens if it got one element, two element, etc
function sum(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sum(arr.slice(1));
}
console.log(sum([1,2,3,4,5]));
// 1 + sum([2,3,4]),
// 2 + sum([3,4]),

// 0 + 5
// 5 + 4
// 9 + 3
// 12 + 2
// 14 + 1
