function insertionSort(arr) {
    let step = 0;
    for(let i = 1; i < arr.length; ++i) {
        let key = arr[i];
        let j = i-1;
        while(j >= 0 && arr[j] > key) {
            arr[j+1] = arr[j];
            j--;
        }
        step++;
        arr[j+1] = key;
        console.log(`step ${step}:  ${[arr]}`);
    }
    return arr;
}
console.log(insertionSort([1,5,2,6,3,4]));