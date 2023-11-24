function findRotatedIndex(arr, num) {
    let startIdx = 0;
    let endIdx = arr.length - 1;

    while(startIdx <= endIdx){
        let midIdx = Math.floor((startIdx + endIdx) / 2);

        if(arr[midIdx] === num){
            return midIdx;
        }

        //check which side of arr is sorted
        if(arr[startIdx] <= arr[midIdx]){
            //left side
            if(arr[startIdx] <= num && num < arr[midIdx]){
                endIdx = midIdx - 1;
            }else{
                startIdx = midIdx + 1;
            }
        } else {
            //right side
            if(arr[midIdx] < num && num <= arr[endIdx]){
                startIdx = midIdx + 1;
            } else {
                endIdx = midIdx - 1;
            }
        }
    }

    //if num not found
    return -1
}


module.exports = findRotatedIndex