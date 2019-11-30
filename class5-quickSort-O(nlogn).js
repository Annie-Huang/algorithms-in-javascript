// It's build into the some language like C automatically.
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
    // console.log('here');
    if(array.length < 2) return array; // If it got 1 or 0 element in the array, there is nothing to sort.

    // You'll find that the most complex issue in quickSort is choosing a good pivot element.
    // Choosing the wrong one can drastically decrease its performance.
    let pivotIndex = Math.floor(array.length/2);     // Call 4 times
    // let pivotIndex = array.length - 1;               // Call 5 times
    // let pivotIndex = 0;                              // Call 4 times
    let pivot = array[pivotIndex];
    console.log('pivotIndex=', pivotIndex);
    console.log('pivot=', pivot);
    let less = [];
    let greater = [];
    for(let i in array) {
        if(i != pivotIndex) {
            array[i] > pivot ? greater.push(array[i]) : less.push(array[i])
        }
    }

    console.log('less=', less);
    console.log('greater=', greater);
    console.log('---------------------------');

    return [
        ...quickSort(less),
        pivot,
        ...quickSort(greater)
    ]
}

console.log('unsorted list=[3,4,6,1,2,5]');
console.log(quickSort([3,4,6,1,2,5]));

// [], [3,4,6,2,5], pivot=1
// [], ([3,4,2,5], [], pivot=6), pivot=1
// [], (([], [3,4,5], pivot=2), [], pivot=6), pivot=1
// [], (([], ([3],[5], pivot=4), pivot=2), [], pivot=6), pivot=1

// [], (([], [3, 4, 5], pivot=2), [], pivot=6), pivot=1
// [], ([2, 3, 4, 5], [], pivot=6), pivot=1
// [], [2, 3, 4, 5, 6], pivot=1
// [1, 2, 3, 4, 5, 6]
