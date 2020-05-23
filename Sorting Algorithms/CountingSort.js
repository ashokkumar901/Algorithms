//CountSort algorithm- Can be applied only when the range of elements is known.
//Time Complexity O(n+k) Space Complexity(k)

let CountingSort = (A) => {
    let helper = [];
    for (let i = 0; i < A.length; i++) {
        if (helper[A[i]]) {
            helper[A[i]] += 1;
        } else {
            helper[A[i]] = 1;
        }
    }
    console.log(helper);
    let newArr = [];
    for (let i in helper) {
        while (helper[i] > 0) {
            newArr.push(parseInt(i));
            helper[i]--
        }
    }
    return newArr;
}

console.log(CountingSort([7, 6, 5, 4, 2, 2, 2, 3, 2, 1]));