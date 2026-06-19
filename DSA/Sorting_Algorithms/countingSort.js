function countingSort(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr); 
    let range = max - min + 1; 
    let res = [];
    let countArr = new Array(range).fill(0);
    for (let i = 0; i < arr.length; ++i) {
        let idx = arr[i] - min;
        ++countArr[idx];
    }
    
    for (let i = 0; i < countArr.length; ++i) {
        while (countArr[i]--) {
            res.push(i + min);
        }
    }
    return res;
}