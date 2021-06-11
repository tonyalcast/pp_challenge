const generateArray = (nDigits, starter, array) => {
    if (starter == nDigits) {
        return true;
    }
    array.push(Math.floor(Math.random() * 10));
    generateArray(nDigits, starter + 1, array);
}

const moveZerosToTheEnd = (array) => {
    let length = array.length
    for (let i = 0; i < length; i++) {
        if (array[i] == 0) {
            array.splice(i, 1);
            array.push(0);
            i--;
            length--;
        }
    }
}

const addUnit = (array, lastPos, nPlus) => {
    if (lastPos < 0) return true;
    array[lastPos] = nPlus + array[lastPos];

    if (array[lastPos] > 9) {
        let rest = array[lastPos] - 9;
        array[lastPos] = 9;
        addUnit(array, lastPos - 1, rest);
    }
    else{
        return true;
    }
}

const getTheMaxSumSubArray = (array, len, result) => {
    if (len > array.length + 1) return true;
    subArrayProcess(array, len, 0, result);
    getTheMaxSumSubArray(array, len + 1, result);
}

const subArrayProcess = (array, len, startIn, result) => {
    if (array.length <= len - 1) {
        return result;
    }
    let subArr = array.slice(startIn, len);
    let sum = subArr.reduce((a, b) => a + b, 0);
    if (result.maxSum < sum) {
        result.maxSum = sum;
        result.subArr = subArr;
    }
    subArrayProcess(array, len + 1, startIn + 1, result);
}

module.exports = {
    generateArray,
    moveZerosToTheEnd,
    addUnit,
    getTheMaxSumSubArray
}