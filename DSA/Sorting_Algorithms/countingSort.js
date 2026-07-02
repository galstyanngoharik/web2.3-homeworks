function countingSort(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr); 
    let range = max - min + 1; 
    let n = arr.length;
    let res = [];
    let countArr = new Array(range).fill(0);
    
    for(let i = 0; i < n; ++i) {
        countArr[arr[i]-min]++;
    }
     for(let i = 1; i < range; ++i) {
        countArr[i] += countArr[i - 1];
    }
    
    for (let i = n-1; i >= 0; --i) {
        let val = arr[i];
        let idx = val - min;
        let pos = countArr[idx]-1;
        res[pos] = val;
        countArr[idx]--;
    }
    return res;
}
console.log(countingSort([2,4,2,3,5,4,6]));