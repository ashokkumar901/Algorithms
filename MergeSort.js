//Merge sort algorithm
//Time Complexity = O(nlogn)
//Space Complexity = O(n) also called as out of the place algorithm because extra space is required

//Merging- The main step in mergesort

let Merge = (A, p, q, r) => {
    let n1 = q - p + 1;
    let n2 = r - q;
    let L = [];
    let R = [];
    for (let i = 0; i < n1; i++) {
        L[i] = A[p + i - 1];
    }
    for (let j = 0; j < n2; j++) {
        R[j] = A[q + j];
    }
    L[n1] = 999999999999999999;
    R[n2] = 999999999999999999;
    let i = 0; let j = 0;
    for (let k = p - 1; k < r; k++) {
        if (R[j] <= L[i]) {
            A[k] = R[j];
            j = j + 1;
        } else {
            A[k] = L[i];
            i = i + 1;
        }
    }
    return A;
}

//MergeSort Algorithm
let MergeSort = (A, p, r) => {
    p = p || 1;
    r = r || A.length;
    let q = Math.floor((p + r) / 2);
    if (p < r) {
        MergeSort(A, p, q);
        MergeSort(A, q + 1, r);
        Merge(A, p, q, r);
    }
    return A;
}

console.log(MergeSort([4, 5, 6, 7, 0, 1, 2, 3,99,88]));
