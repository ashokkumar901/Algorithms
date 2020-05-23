//KnapSack problem time complexity of O(nlogn)
//For Sorting the input of KnapSack problem in non increasing order
let MinHeapify = (A, i, heapSize) => {
    let l;
    let r;
    let smallest;
    heapSize = heapSize || A.length;
    l = (2 * i) + 1;
    r = (2 * i) + 2;
    if (l <= heapSize - 1 && A[l]['pwRatio'] < A[i]['pwRatio']) {
        smallest = l;
    } else {
        smallest = i;
    }
    if (r <= heapSize - 1 && A[r]['pwRatio'] < A[smallest]['pwRatio']) {
        smallest = r;
    }
    if (smallest !== i) {
        let temp = A[i];
        A[i] = A[smallest];
        A[smallest] = temp;
        MinHeapify(A, smallest, heapSize);
    }
    return A;
}

//BuildMinHeap algorithm the heart of heap sort algorithm
//Time Complexity = O(n) Space Complexity = O(logn)
let BuildMinHeap = (A) => {
    for (let i = Math.floor((A.length - 2) / 2); i >= 0; i--) {
        MinHeapify(A, i);
    }
    return A;
}

//HeapSort algorithm
//Time Complexity = O(nlogn) Space complexity = O(1)
let HeapSort = (A) => {
    if (A.length === 0) {
        return A;
    }
    BuildMinHeap(A);
    let heapSize = A.length;
    for (let i = A.length - 1; i >= 1; i--) {
        let temp = A[0];
        A[0] = A[i];
        A[i] = temp;
        heapSize = heapSize - 1;
        MinHeapify(A, 0, heapSize);
    }
    return A;
}

module.exports = { HeapSort };