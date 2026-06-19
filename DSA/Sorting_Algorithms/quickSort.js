function quickSort(arr, low, high) {
    if(low < high) {
        let p = partitionMiddle(arr, low, high);
        quickSort(arr, low, p-1);
        quickSort(arr, p+1, high);
    }
}
function partitionMiddle(arr, low, high) {
    let i = low-1;
    let mid = Math.floor(low+(high-low) / 2);
    let p = arr[mid];
    [arr[mid], arr[high]] = [arr[high], arr[mid]];
    for(let j = low; j < high; j++) {
        if(arr[j] < p) {
            i++;
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }
    }
    [arr[i+1], arr[high]] = [arr[high], arr[i+1]];
    return i + 1;
}
