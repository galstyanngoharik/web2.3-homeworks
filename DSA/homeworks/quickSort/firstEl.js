function quickSort(arr, low, high) {
//    console.log(arr);
if(low < high) {
    let p = partitionFirst(arr, low, high);
    quickSort(arr,low, p-1);
    quickSort(arr, p+1, high);
    }
}

function partitionFirst(arr, low, high) {
let p = arr[low];
let i = high+1;
for(let j = high; j > low; j--) {
    if(arr[j] > p) {
        i--;
       [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}
[arr[i - 1], arr[low]] = [arr[low], arr[i - 1]];
//console.log(arr);
return i - 1;
}

let arr = [20, 50, 10, 3, -4, 60];
quickSort(arr, 0, arr.length-1);
console.log(arr);