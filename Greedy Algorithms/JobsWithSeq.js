//Jobs with Sequences algorithm which is used to find the maximum profit given the profits and deadlines of a job
//Time Complexity of O(n^2)
let HeapSort = require('../Sorting Algorithms/MinHeapForJobs');
let JobsWithSeq = (profitsandDeadlines) => {
    let sortedArray = HeapSort.HeapSort(profitsandDeadlines);
    let maxProfit = 0;
    let arraySize;
    let maxDeadline = profitsandDeadlines[0]['deadline'];
    //Find the maximum deadline
    for (let i = 1; i < profitsandDeadlines.length; i++) {
        if (profitsandDeadlines[i]['deadline'] > maxDeadline) {
            maxDeadline = profitsandDeadlines[i]['deadline'];
        }
    }
    arraySize = maxDeadline;
    let maxProfitArray = new Array(arraySize);
    //place the jobs in the maxprofit array to get the maximum profit
    for (let i = 0; i < sortedArray.length; i++) {
        for (let j = maxProfitArray.length - 1; j >= 0; j--) {
            if (j + 1 <= sortedArray[i]['deadline'] && !maxProfitArray[j]) {
                maxProfitArray[j] = sortedArray[i];
                maxProfit += sortedArray[i]['profit'];
                break;
            }
        }
    }
    console.log('maximumProfitArray', maxProfitArray);
    return maxProfit;
}

console.log(JobsWithSeq([{ "profit": 15, "deadline": 7 }, { "profit": 20, "deadline": 2 }, { "profit": 30, "deadline": 5 }
    , { "profit": 18, "deadline": 3 }, { "profit": 18, "deadline": 4 }, { "profit": 10, "deadline": 5 },
{ "profit": 23, "deadline": 2 }, { "profit": 16, "deadline": 7 }, { "profit": 25, "deadline": 3 }]));