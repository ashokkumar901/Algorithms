//This code implements linear search
//Time Complexity O(n)
let arr = [1,9,8,6,3,4,5,2,7];

let search = (element)=>{
    for(let i=0;i<arr.length;i++){
        if(arr[i] == element){
            console.log('The element is present at index',i);
            return i;
        } 
    }
    console.log('The element is not present in the array'); 
    return -1;
}
(search(100));