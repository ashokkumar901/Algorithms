//Insertion sort algorithm
//Time Complexity = O(n^2)(Worst case), Omega(n)(best case)
//Space Complexity = O(1) also called as inplace algorithm because no extra space is required

let InsertionSort = (A) => {
    for (let i = 1; i < A.length; i++) {
        let key = A[i];
        let j = i - 1;
        while (j > -1 && A[j] > key) {
            A[j + 1] = A[j];
            j = j - 1;
        }
        A[j + 1] = key;
    }
    return A;
}

console.log(InsertionSort([9, 8, 7, 6, 5, 4, 3, 2, 1]))