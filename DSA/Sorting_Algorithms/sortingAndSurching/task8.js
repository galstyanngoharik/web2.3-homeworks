function binarySearch(arr, start, end, target) {
    if(start <= end) {
       let mid = Math.floor(start+(end-start)/2);
        if(target === arr[mid]) { return mid; }
            else if(target > arr[mid]) { return binarySearch(arr, mid+1, end, target);}
                else if(target < arr[mid]) {  return binarySearch(arr, start, mid-1, target); }
    }
        else { return -1; } 
}
console.log(binarySearch(["apple", "banana", "kiwi", "orange"], 0, 3, "kiwi"));
