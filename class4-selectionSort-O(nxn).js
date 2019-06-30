// Function that loops through array for largest number
// Function that loops through list calling ^^, removing largest from list.
// =========================================================

const itemsToSort = [3,2,4,1,6];

function findLargestValue(list) {
    let lrg = list[0];
    let indexOfLarge = 0;
    for(let i=1; i<=list.length; i++) {
        if(lrg < list[i]) {
            lrg = list[i];
            indexOfLarge = i;
        }
    }
    return indexOfLarge;
}

// desending order.
function selectionSort(list) {
    let newList = [];
    let lrgItem;
    while(list.length) {
        lrgItem = findLargestValue(list);
        newList.push(list[lrgItem]); // push will put at the end of the array.
        list.splice(lrgItem, 1);

        // splice() changes the original array whereas slice() doesn't
        // var array=[1,2,3,4,5];
        // console.log(array.splice(2));
        // This will return [3,4,5]. The original array is affected resulting in array being [1,2].
        // console.log(array.slice(2));
        // This will return [3,4,5]. The original array is NOT affected with resulting in array being [1,2,3,4,5].
    }
    return newList;
}

console.log(selectionSort(itemsToSort));

// O(n) because of the while loop in selectionSort.
// O(n*n) or O(n^2) when you combine the while loop and for each in selectionSort and findLargestValue

// quick sort and merge sort is more efficient.

