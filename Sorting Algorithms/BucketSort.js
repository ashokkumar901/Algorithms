//BucketSort Algorithm using Insertion Sort Algorithm
//Time Complexity = Omega(n)(Best case) O(n^2)(Worse Case)
//Space Complexity = n+k;
let InsertionSort = require('./InsertionSort');
let BucketSort = (A, bucketSize) => {
    if (A.length === 0) {
        return A;
    }
    let min = A[0];
    let max = A[0];
    bucketSize = bucketSize || 5;
    //Finding minimum and maximum of the array
    A.forEach(element => {
        if (element < min) {
            min = element;
        } else if (element > max) {
            max = element;
        }
    });
    //Find how many buckets should be there
    let bucketCount = Math.floor((max - min) / bucketSize) + 1;
    //Create a buckets array it is an array of arrays
    let allBuckets = new Array(bucketCount);
    for (let i = 0; i < allBuckets.length; i++) {
        allBuckets[i] = [];
    }
    //Pushing the elements to different buckets
    A.forEach(element => {
        allBuckets[Math.floor((element - min) / max)].push(element);
    });
    A.length = 0;
    //Sorting the each bucket and pushing each element to the given array
    allBuckets.forEach(bucket => {
        bucket = InsertionSort.InsertionSort(bucket);
        bucket.forEach(element => {
            A.push(element);
        });
    });
    return A;
}

console.log(BucketSort([0.01, 1.3, 2.5, 3.2]));