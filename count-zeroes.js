function countZeroes(arr) {
    let firstIdx = 0;
    let lastIdx = arr.length - 1;

    while (firstIdx <= lastIdx) {
        let middleIdx = Math.floor((firstIdx + lastIdx) / 2);
        let middleVal = arr[middleIdx];

        if (middleVal === 1) {
            // If middle value is 1, move to the right half
            firstIdx = middleIdx + 1;
        } else {
            // If middle value is 0, check if it's the first zero
            // If the element before it is 1 or it's the first element, then it's the first zero
            if (middleIdx === 0 || arr[middleIdx - 1] === 1) {
                return arr.length - middleIdx;
            } else {
                // Move to the left half
                lastIdx = middleIdx - 1;
            }
        }
    }

    // If no zero is found
    return 0;
}

module.exports = countZeroes;