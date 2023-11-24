function findRotationCount(arr) {
    //find min num and calculate how far from index zero it is -- indexOf minNum?
    let minNum = Math.min(...arr);

    return arr.indexOf(minNum);

}

module.exports = findRotationCount