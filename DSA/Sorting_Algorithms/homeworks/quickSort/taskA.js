let comparisons = 0;
let recursive = 0;
let swap = 0;

function quickSort(arr, low, high) {
    recursive++;
    if(low < high) {
        let p = partitionLast(arr, low, high);
        quickSort(arr, low, p-1);
        quickSort(arr, p+1, high);
    }
}

function partitionLast(arr, low, high) {
    let p = arr[high];
    let i = low -1;
    for(let j = low; j < high; j++) {
        comparisons++;
        if(arr[j] < p) {
            i++;
            [arr[j], arr[i]] = [arr[i], arr[j]];
            swap++;
        }
    }
    [arr[i+1], arr[high]] = [arr[high], arr[i+1]];
    swap++;    
    return i+1;
}

let arr = [7, 6, 5, 20, 19];
console.log(quickSort(arr, 0, arr.length-1));
console.log(arr);
console.log("comparisons: " + comparisons);
console.log("recursive: " + recursive);
console.log("swap: " + swap);