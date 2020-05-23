//BubbleSort Algorithm
//Time Complexity = OmegA(n)(Best CAse) || O(n^2)(Worst CAse)
let BubbleSort = (A) => {
    if (A.length === 0) {
        return A;
    }
    let n = A.length;
    let swapped;
    for (let i = 0; i < n; i++) {
        swapped = 0;
        for (let j = 0; j < n - i - 1; j++) {
            if (A[j] > A[j + 1]) {
                let temp = A[j];
                A[j] = A[j + 1];
                A[j + 1] = temp;
                swapped = 1;
            }
        }
    }
    if (swapped === 0) {
        return A;
    }
    return A;

}

console.log(BubbleSort([6, 5, 4]));