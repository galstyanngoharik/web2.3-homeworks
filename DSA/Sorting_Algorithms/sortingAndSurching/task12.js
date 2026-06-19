function insertionSort(arr, i=1) {
    if(i >= arr.length) { return arr; } 
    let key = arr[i];
    let j = i-1;
        while(j >= 0 && arr[j] > key) {
            arr[j+1] = arr[j];
            j--;
        }   
        arr[j+1] = key;
        return insertionSort(arr, i+1);  
}
console.log(insertionSort([1,5,2,6,3,4]));
