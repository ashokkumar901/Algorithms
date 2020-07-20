//This code performs selectionsort
let selectionSort = (arr)=>{
    for(let i=0;i<arr.length;i++){
        for(let j=i+1,k=i;j<arr.length;j++){
            if(arr[j]<arr[k]){
                k = j;
            }
            if(k!==i){
                let temp = arr[k];
                arr[k] = arr[i];
                arr[i] = temp;
            }
        }
    }
}
let arr = [6,7,5,8,43]
selectionSort(arr);
console.log(arr);