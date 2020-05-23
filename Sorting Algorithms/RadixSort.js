//RadixSort algorithm
//Time Complexity = log l(base b)(O(n+b)) where b is the base of the numbers given in the array
//Space Complexity = O(b) 

// helper function to get the last nth digit of a number
let getDigit = (num, nth) => {
    let value = 0;
    while (nth--) {
        value = num % 10;
        num = Math.floor((num - value) / 10);
    }
    return value;
}

//Radix Sort implementation
let RadixSort = (A) => {
    let max = Math.ceil(Math.log10(Math.max.apply(Math, A)));
    let idx = 0;
    let digitBuckets = [];
    for (let i = 0; i < max; i++) {
        digitBuckets = []
        for (let j = 0; j < A.length; j++) {
            let digit = getDigit(A[j], i + 1);
            digitBuckets[digit] = digitBuckets[digit] || [];
            digitBuckets[digit].push(A[j]);
        }
        idx = 0;
        for (let t = 0; t < digitBuckets.length; t++) {
            if (digitBuckets[t] && digitBuckets[t].length > 0) {
                for (let j = 0; j < digitBuckets[t].length; j++) {
                    A[idx++] = digitBuckets[t][j];
                }
            }
        }
    }
    return A;
}

console.log(RadixSort([798, 5555, 13, 454, 1]));