// 1. What is the time complexity of Merge Sort in:
// Best case - O(n log n)
// Average case - O(n log n)
// Worst case - O(n log n)

// 2. Why is Merge Sort stable?
// Because when merging, if two elements are equal, we always take from the left array first — so original order is preserved.

//3 What is the space complexity of Merge Sort?
//O(n) — because we create temporary arrays during merging.

//4 In which situations is Merge Sort preferred over Quick Sort?
//When stability matters
//When you need guaranteed O(n log n) — Quick Sort can hit O(n²)

//5 Why is Merge Sort commonly used for linked lists and external sorting?
//External sorting (data too big for RAM) — reads data in sequential chunks, merges them one by one 



