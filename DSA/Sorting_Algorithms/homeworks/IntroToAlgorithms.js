//task1: Linear search
function linearSearch(arr, target) {
    for(let i = 0; i <= arr.length-1; ++i) {
        if(arr[i] === target) {
            return i;
        }
    }
    return -1;
}
console.log(linearSearch([10, 20, 30, 40, 50], 50));


//task2: Bubble sort
function bubbleSort(arr) {
    let n = arr.length;
    let flag = false;
    for(let i = 0; i < n; ++i) {
        for(let j = 0; j < n-i-1; ++j) {
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                flag = true;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([20, -1, 30, 5, 40, 50]));

