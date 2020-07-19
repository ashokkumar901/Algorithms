//This code implements binary search
//Binary search can be implemeted only on sorted array
//Time Complexity O(log n)
let arr = [3,4,5,6,7,8,9];
let binarySearch = (arr,f,l,element)=>{
    if(l>=1){
        let mid = Math.ceil((f+l-1)/2);
        if(arr[mid]===element){
            console.log('The element is present at index',mid);
            return mid;
        }
        if(arr[mid]>element){
            return binarySearch(arr,f,mid-1,element);
        } else if(arr[mid]<element){
            return binarySearch(arr,mid+1,l,element);
        }
    }
    console.log('The element is not present in the array');
    return -1;
}

binarySearch(arr,0,arr.length,60);
