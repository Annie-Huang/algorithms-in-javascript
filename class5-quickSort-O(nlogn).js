// Quick sort is divide and conquer algorithm that use recursion to break down array to smaller pieces
// and then connects them at the end.

// less than array
// pivot
// greater than array
// O(n) * O(log n) = O(n log n) -> best and average case
// O(n) * O(n) = O(n^2) -> worse case
// If you choose middle one or a random one, (rather than beginning or end one), you are on average getting a quicker result.
// =========================================================

function quickSort(array) {
    console.log('here');
    if(array.length < 2) return array;
    let pivotIndex = Math.floor(array.length/2);
    // let pivotIndex = array.length - 1;
    // let pivotIndex = 0;
    let pivot = array[pivotIndex];
    console.log(pivot);
    let less = [];
    let greater = [];
    for(let i in array) {
        if(i != pivotIndex) {
            array[i] > pivot ? greater.push(array[i]) : less.push(array[i])
        }
    }

    return [
        ...quickSort(less),
        pivot,
        ...quickSort(greater)
    ]
}

console.log(quickSort([3,4,6,1,2,5]));
