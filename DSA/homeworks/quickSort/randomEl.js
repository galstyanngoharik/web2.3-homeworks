function quickSort(arr, low, high) {
    if(low < high) {
        let p = partitionRandom(arr, low, high);
        quickSort(arr, low, p-1);
        quickSort(arr, p+1, high);
    }
}

function partitionRandom(arr, low, high) {
    let r = Math.floor(Math.random() * (high - low + 1)) + low;
    let p = arr[r];
    let i = low-1;
    for(let j = low; j < high; ++j) {
        if(arr[j] < p) {
            i++;
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }
    }
    [arr[i+1], arr[high]] = [arr[high], arr[i+1]];
    [arr[r], arr[high]] = [arr[high], arr[r]];

    return i+1; 
}
let arr = [7, 6, 5, 20, 19];
quickSort(arr, 0, arr.length-1);
console.log(arr);
  
