//Quick sort algorithm
//Time Complexity = O(n^2)(Worst case), Omega(nlogn)(best case)
//Space Complexity = Omega(logn) (best case), O(n) (worse case)

//Partitioning - The heart of the quick sort algorithm

let Partition = (A, p, r) => {
    let x = A[r];
    let i = p - 1;
    for (let j = p; j < r; j++) {
        if (A[j] <= x) {
            i = i + 1;
            let temp = A[i];
            A[i] = A[j];
            A[j] = temp;
        }
    }
    let temp2 = A[i + 1];
    A[i + 1] = A[r];
    A[r] = temp2;
    return i + 1;
}

// console.log(Partition([9,6,5,0,8,2,4,7], 0, 7));

// Quick sort algorithm
let QuickSort = (A, p = 0, r = A.length - 1) => {
    if (A.length === 0) {
        return A;
    }
    if (p < r) {
        let q = Partition(A, p, r);
        QuickSort(A, p, q - 1);
        QuickSort(A, q + 1, r);
    }
    return A;
}

console.log(QuickSort([9, 6, 5, 0, 8, 2, 4, 90,89983943,34343,7]));

