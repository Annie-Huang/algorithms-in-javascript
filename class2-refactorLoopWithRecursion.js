// Refactor a Loop in JavaScript to Use Recursion
// =========================================================

// function counter() {
//     for(let n=0; n<=10; n++) {
//         console.log(n);
//     }
// }
// counter();

// ----------------------------------------------------------

// // When dealing with recursion, it is important to know that we need to have
// // At least one base case and one recursion case
// // And recursion is not necessary good for performance. Loop is better for performance but recursion is easier to understand
// function counter(n) {
//     console.log(n);
//
//     // Without this it will go into infinite loop
//     if (n===10) {
//         return;
//     }
//     return counter(n+1);
// }
// counter(0);

// ----------------------------------------------------------

// const items = [[1,2,3], [4,5,6]];

// const items = [[1,2,3], [4,5,6]];
// const items = [[1,2,3], [4,5,5]];
// const items = [[1,2,3], [4,5,[6]]];
const items = [[1,2,3], [4,5,[5]], 6];

// function findSix(i) {
//     let hasSix = 'no!';
//     i.forEach(a => {
//         a.forEach(l => {
//             if(l === 6) {
//                 hasSix = 'yes!';
//             }
//         })
//     });
//     return hasSix;
// }

function findSix(i) {
    let hasSix = 'no!';
    i.forEach(a => {
        if(a === 6) {
            hasSix = 'yes!';
        }
        if(Array.isArray(a)) {
            hasSix = findSix(a);
        }
    });
    return hasSix;
}

console.log('hasSix=', findSix(items));























