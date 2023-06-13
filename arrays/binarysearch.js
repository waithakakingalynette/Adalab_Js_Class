//Given an array num of numbers with a length of n find the target of the array
// Return the taget if the target is found elsenull.

function mergesort(num){
    if(num.length <=1){
        return num
    }
    let middle=Math.floor(num.length/2);
    let left=num.slice(0,middle);
    let right=num.slice(middle);
    console.log(left);
    console.log(right);
    return sortedArray(mergesort(left),mergesort(right));
}

function sortedArray(left,right){
    let emptyArr=[]
    while(left.length && right.length){
        if(left[0] < right[0]){
            emptyArr.push(left.shift())
        }
        else{
            emptyArr.push(right.shift())
        }
    }
    return [...emptyArr,...left,...right]
}
let num=[5,11,7,9,12,13,15,25,21,17]
console.log(mergesort(num))

function binary(num1,target){
    let left =0
    let right=num1.length-1
    while(left<=right){
        let middle=Math.floor((left+right)/2);
        if(num1[middle]===target){
            return middle
        }
        else if (num1[middle]>target){
            right=middle-1;
        }
        else{
            left=middle+1;
        }
    }
    return null
    }
    let num1=[5,11,7,9,12,13,15,25,21,17]
    let target =13
    console.log(binary(num1,target))
