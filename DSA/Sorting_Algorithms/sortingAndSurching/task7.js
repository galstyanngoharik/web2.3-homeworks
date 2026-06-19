function binarySearch(arr, start, end, calls, target) {
    if(start <= end) {
       let mid = Math.floor(start+(end-start)/2);
        if(target === arr[mid]) { return {"index" : mid, "calls": calls} }
            else if(target > arr[mid]) { return binarySearch(arr, mid+1, end, calls+1, target);}
                else if(target < arr[mid]) {  return binarySearch(arr, start, mid-1, calls+1, target); }
    }
        else { return -1; } 
}
console.log(binarySearch([3,5,6,7,9,11], 0, 5, 1, 6));
