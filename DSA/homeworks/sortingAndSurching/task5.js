function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length-1;
    let count = 0;
    while(start <= end) {
        count++;
       let mid = Math.floor(start+(end-start)/2);
        if(target === arr[mid]) { return {"index" : mid, "iteration": count}; }
            else if(target > arr[mid]) { start = mid+1;}
                else if(target < arr[mid]) { end = mid-1;}
    }            
        return {"index" : -1, "iteration": count}; 
}
console.log(binarySearch([3,5,6,7,9,11], 9));