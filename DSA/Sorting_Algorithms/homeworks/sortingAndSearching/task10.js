class SearchUtils {
    insertionSort(arr) {
         for(let i = 1; i < arr.length; ++i) {
        let key = arr[i];
        let j = i-1;
        while(j >= 0 && arr[j] > key) {
            arr[j+1] = arr[j];
            j--;
        }   
        arr[j+1] = key;
    }
    return arr;
}
iterativeBinarySearch(arr,target) {
     let start = 0;
    let end = arr.length-1;
    while(start <= end) {
       let mid = Math.floor(start+(end-start)/2);
        if(target === arr[mid]) { return mid;}
            else if(target > arr[mid]) { start = mid+1;}
                else if(target < arr[mid]) { end = mid-1;}
    }
    return -1;
}
recursiveBinarySearch(arr, start, end, target) {
    if(start <= end) {
       let mid = Math.floor(start+(end-start)/2);
        if(target === arr[mid]) { return mid; }
            else if(target > arr[mid]) { return binarySearch(arr, mid+1, end, target);}
                else if(target < arr[mid]) {  return binarySearch(arr, start, mid-1, target); }
    }
        else { return -1; } 
}
}
const utils = new SearchUtils();

console.log(utils.insertionSort([4,1,3]));
console.log(utils.iterativeBinarySearch([1,2,3], 2));
