const items = [1,5,2,7,3,12,6,10];

// O(n)
// Once for each element in the array

// function search(list, item) {
//     let hasItem = null;
//     let counter = 0;
//
//     for(let e of list) {
//         counter++;
//         if(e === item) {
//             hasItem = true;
//             break;
//         }
//     }
//
//     console.log(counter);
//     return hasItem;
// }


// O(log n)             log is the flip of exponent.
// 2^3 = 8              Since we only have 8 items. it will take at most 3 iteration to find the answers.
// 2^10 = 1024          As you can see, when your number of element grow, the power of binary search really shows.
// 2^20 = 1 million


// First sort the item. And then use the mid point to keep refactor the start and end point.
items.sort((a,b) => a - b);
console.log(items);
function search(list, item) {
    let low = 0;
    let high = list.length;
    let counter = 0;

    while(low <= high) {
        counter++;
        let mid = Math.floor((low + high)/2);
        let guess = list[mid];
        if(guess === item) {
            console.log(counter);
            return true;
        }
        if(guess > item) high = mid - 1;
        else low = mid + 1;
    }

    console.log(counter);
    return null;
}



console.log(search(items, 12));
