function sortedFrequency(arr, num) {
  //find first and last occurence then subtract
  function findFirstOccurence(){
      let start = 0;
      let end = arr.length -1;
      let result = -1;

      while(start <= end){
          let mid = Math.floor((start + end) / 2);

          if(arr[mid] === num){
              result = mid
              end = mid - 1;
          } else if (arr[mid] < num){
              start = mid + 1;
          } else{
              end = mid - 1;
          }
        }

      return result;

    }

    function findLastOccurence(){
        let start = 0;
        let end = arr.length -1;
        let result = -1;

        while(start <= end){
            let mid = Math.floor((start + end) / 2);

            if(arr[mid] === num){
                result = mid;
                start = mid + 1;
            } else if(arr[mid] < num){
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }

        return result;

    }

    const firstOccurrence = findFirstOccurence();
    const lastOccurrence = findLastOccurence();

    if(firstOccurrence !== -1 && lastOccurrence !== -1){
       return lastOccurrence - firstOccurrence + 1;
    } else {
        return -1
    }
}
  
  module.exports = sortedFrequency