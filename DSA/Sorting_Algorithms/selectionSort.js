function selection(arr) {
    let n = arr.length;

    for (let i = 0; i < n; ++i) {
        let minIndex = i;
        for (let j = i + 1; j < n; ++j) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}