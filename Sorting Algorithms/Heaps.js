//Max-Heapify algorithm The heart of the BuildHeap algorithm
//Time Complexity = O(logn) Space Complexity = O(logn)
let MaxHeapify = (A, i, heapSize) => {
    let l;
    let r;
    let largest;
    heapSize = heapSize || A.length;
    l = (2 * i) + 1;
    r = (2 * i) + 2;
    if (l <= heapSize - 1 && A[l] > A[i]) {
        largest = l;
    } else {
        largest = i;
    }
    if (r <= heapSize - 1 && A[r] > A[largest]) {
        largest = r;
    }
    if (largest !== i) {
        let temp = A[i];
        A[i] = A[largest];
        A[largest] = temp;
        MaxHeapify(A, largest, heapSize);
    }
    return A;
}

//BuildMaxHeap algorithm the heart of heap sort algorithm
//Time Complexity = O(n) Space Complexity = O(logn)
let BuildMaxHeap = (A) => {
    for (let i = Math.floor((A.length - 2) / 2); i >= 0; i--) {
        MaxHeapify(A, i);
    }
    return A;
}

//HeapSort algorithm
//Time Complexity = O(nlogn) Space complexity = O(1)
let HeapSort = (A) => {
    if (A.length === 0) {
        return A;
    }
    BuildMaxHeap(A);
    let heapSize = A.length;
    for (let i = A.length - 1; i >= 1; i--) {
        let temp = A[0];
        A[0] = A[i];
        A[i] = temp;
        heapSize = heapSize - 1;
        MaxHeapify(A, 0, heapSize);
    }
    return A;
}

// console.log(HeapSort([9, 8, 7, 6, 5, 4, 3, 2, 1]));

//HeapExtractMax Algorithm
//Time complexity = O(logn) Space Complexity= O(logn)
let HeapExtractMax = (A) => {
    let heapSize = A.length - 1;
    if (heapSize < 0) {
        console.log('error');
    }
    BuildMaxHeap(A);
    let max = A[0];
    A[0] = A[heapSize];
    heapSize = heapSize - 1;
    MaxHeapify(A, 0);
    return max;
}

// console.log(HeapExtractMax([9,8,7]));

//increase a key in Heap
//Time complexity= O(logn) Space Complexity=O(1)
let HeapIncreaseKey = (A, i, key) => {
    if (key < A[i]) {
        console.log('error');
    }
    A[i] = key;
    while (i > 0 && A[Math.floor(i / 2)] < A[i]) {
        let temp = A[i];
        A[i] = A[Math.floor(i / 2)];
        A[Math.floor(i / 2)] = temp;
        i = Math.floor(i / 2);
    }
    return A;
}

console.log(HeapIncreaseKey([9, 8, 7, 2, 1], 2, 100));
