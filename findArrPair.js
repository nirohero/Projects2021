//Given an unsorted integer array, find a pair with the given sum in it.
const arr= [1,2,4,5,7,8];
let target = 3;

findPair(arr,target);


function findPair(arr1,target){

    for(let i=0; i<arr1.length;i++){
        for(let j=i+1; j<arr1.length;i++){
            if (arr1[i]+arr1[j]==target){
             console.log(arr[i], arr[j]);
             return;
        	}
        }
    }
}