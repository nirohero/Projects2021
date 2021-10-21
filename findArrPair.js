//Given an unsorted integer array, find a pair with the given sum in it.
const arr= [1,2,4,5,7,8];
let target = 3;

findPair(arr,target);


function findPair(arr1,target){//brute force method
    for(let i=0; i<arr1.length;i++){
        for(let j=i+1; j<arr1.length;i++){
            if (arr1[i]+arr1[j]==target){//checks to see if the two values's sum is equal to the target
             console.log(arr[i], arr[j]);
             return;
        	}
        }
    }
}
function  findPair2(arr1, target){
    //create empty hashmap
        let hashmap = new Map();
        for(let i = 0;i<arr1.length;i++){
        if(hashmap.has(target - arr1[i])){
            console.log(arr1[hashmap.get(target-arr1[i])], arr1[i]);
            return;
        }
        }
    }
