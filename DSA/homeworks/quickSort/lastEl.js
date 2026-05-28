function quickSort(arr, low, high) {
    if(low < high) {
        let p = partitionLast(arr, low, high);
        quickSort(arr, low, p-1);
        quickSort(arr, p+1, high);
    }
}
function partitionLast(arr, low, high) {
    let p = arr[high];
    let i = low-1;
    for(let j = low; j < high; ++j) {
        if(arr[j] < p) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        } 
    }
    [arr[i+1], arr[high]] = [arr[high], arr[i+1]];
    return i+1;
}
let arr = [7, 6, 5, 20, 19];
quickSort(arr, 0, arr.length-1);
console.log(arr);
   