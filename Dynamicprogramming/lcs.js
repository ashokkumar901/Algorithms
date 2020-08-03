//This code finds the longest common subsequence given two strings
let lcs = (A, B)=> {
    let ar=new Array(A.length+1);
    for(let i=0;i<=A.length;i++)
        ar[i]=(new Array(B.length+1)).fill(0);
    for(let i=1;i<=A.length;i++){
        for(let j=1;j<=B.length;j++){
            if(A[i-1]===B[j-1]){
                ar[i][j]=1+ar[i-1][j-1];
            }
            else{
                ar[i][j]=Math.max(ar[i][j-1],ar[i-1][j]);
            }
                
        }
    }
    return ar[A.length][B.length];
};
console.log(lcs("abcbdab","bdcaba"));