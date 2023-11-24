function findFloor(arr, val){
    let startIdx = 0;
    let endIdx = arr.length - 1;
    let floor = -1;

    while(startIdx <= endIdx){
        let midIdx = Math.floor((startIdx + endIdx) / 2);

        if(arr[midIdx] === val){
            floor = val;
        } else if(arr[midIdx] < val){
            floor = arr[midIdx];
            startIdx = midIdx + 1;
        } else {
            endIdx = midIdx - 1;
        }
    }

    return floor;
}

module.exports = findFloor