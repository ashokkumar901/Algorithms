//KnapSack problem time complexity of O(nlogn)
//KnapSack Greedy algorithm is to find the maximum profits given the profits and weights
//HeapSort which is used to sort the knapsack input in non increasing order
const HeapSort = require('../Sorting Algorithms/MinHeap');

let KnapSackGreedy = (profitAndWeights, m) => {
    let maxProfit = 0;
    let lastElement;
    for (let i = 0; i < profitAndWeights.length; i++) {
        profitAndWeights[i]['pwRatio'] = profitAndWeights[i]['profit'] / profitAndWeights[i]['weight'];
    }
    HeapSort.HeapSort(profitAndWeights);
    for (let j = 0; j < profitAndWeights.length; j++) {
        if (m > 0 && profitAndWeights[j]['weight'] <= m) {
            m = m - profitAndWeights[j]['weight'];
            maxProfit = maxProfit + profitAndWeights[j]['profit'];
        } else {
            lastElement = j;
            break;
        }
    }
    if (m > 0) {
        maxProfit = maxProfit + ((profitAndWeights[lastElement]['profit']) *
            (m / profitAndWeights[lastElement]['weight']))
    }
    return maxProfit;
}

console.log(KnapSackGreedy([{ "profit": 2, "weight": 1 }, { "profit": 28, "weight": 4 },
{ "profit": 25, "weight": 5 }, { "profit": 18, "weight": 3 }, { "profit": 9, "weight": 3 }], 15));

console.log(KnapSackGreedy([{ "profit": 25, "weight": 18 }, { "profit": 24, "weight": 15 },
{ "profit": 15, "weight": 10 }], 20));

console.log(KnapSackGreedy([{ "profit": 10, "weight": 2}, { "profit": 5, "weight": 3 },
{ "profit": 15, "weight": 5 }, { "profit": 7, "weight": 7 }, { "profit": 6, "weight": 1 },
{ "profit": 18, "weight": 4 },{ "profit": 3, "weight": 1}], 15));
