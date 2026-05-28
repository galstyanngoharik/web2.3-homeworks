let comparisons = 0;
let mergeOperations = 0;
let recursiveCalls = 0;


function merge(left, right) {
    mergeOperations++;

    let i = 0;
    let j = 0;
    let res = [];
    while(i < left.length && j < right.length) { 
        comparisons++;
        if(left[i] < right[j]) {
        res.push(left[i]);
        i++;
    }
    else { res.push(right[j]); j++; }
    }

    while(i < left.length) { res.push(left[i]); i++; }
    while(j < right.length) { res.push(right[j]); j++; }

    return res;
}

function mergeSort(arr) {
    recursiveCalls++;
    if(arr.length <= 1) { return arr; }
    let mid = Math.floor(arr.length/2); 
    let right = arr.slice(mid);
    let left = arr.slice(0, mid);
    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right);
}
console.log(mergeSort([3,5,4,6,7,2]));
console.log("merge operations: " + mergeOperations);
console.log("recursive calls: " + recursiveCalls);
console.log("comparisons: " + comparisons);