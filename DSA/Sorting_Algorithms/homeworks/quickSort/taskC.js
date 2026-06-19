//1 What is the best-case time complexity of Quick Sort?
//best case — pivot always splits array exactly in half - O(n log n);

//2 What is the worst-case time complexity?
let arr = [12000, 800, 300, 60, 55, 27, 29, -10, -13]; //worst case - O(n^2);

//3 What is the average-case complexity?
let nums = [1,2,3,4,20,19,7,5] //average case - O(n log n); 

//4 Which pivot strategy usually performs better?
//when pivot = arr[mid];

//5 Why can Quick Sort become slow on already sorted arrays?
//Because with pivot = arr[high] or pivot = arr[0] on a sorted array, every partition is completely unbalanced:

//6 Is Quick Sort stable?
//No, because during partitioning, equal elements can jump over each other depending on where the pivot lands.
