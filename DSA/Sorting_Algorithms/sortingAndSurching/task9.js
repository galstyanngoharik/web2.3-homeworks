function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length-1;
    while(start <= end) {
       let mid = Math.floor(start+(end-start)/2);
        if(target === arr[mid]) { return mid; }
            else if(target > arr[mid]) { start = mid+1;}
                else if(target < arr[mid]) { end = mid-1;}
    }    
    return start;        
}
console.log(binarySearch([3,4,5,7,9,11], 12));