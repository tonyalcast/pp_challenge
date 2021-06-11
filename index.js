const {
    generateArray,
    moveZerosToTheEnd,
    addUnit,
    getTheMaxSumSubArray
} = require('./methods');
const { performance } = require('perf_hooks');

let nDigits = Math.floor(Math.random() * 11);
let base_array = [];

let ini, end;

// 0. Generating array.
ini = performance.now();
generateArray(nDigits, 0, base_array);
end = performance.now();

console.log('[0. Base array]', base_array);
console.log('[0. Base array - Elapsed time]', `${end - ini} ms`);



// 1. Moving zeros till the end.
ini = performance.now();
moveZerosToTheEnd(base_array);
end = performance.now();

console.log('[1. Zeros at the end]', base_array);
console.log('[1. Zeros at the end - Elapsed time]', `${end - ini} ms`);




// 2. Adding 1 unit.
base_array = base_array.filter(x => x != 0);
ini = performance.now();
addUnit(base_array, base_array.length - 1, 1);
end = performance.now();
console.log('[2. Adding 1 unit - New Array]', base_array);
console.log('[2. Adding 1 unit - Elapsed time]', `${end - ini} ms`);




// 3. Return maximum subarray sum
base_array = base_array.map((x, i) => x = (i % 2 == 0) ? -x : x);
console.log('[3. Max Sum Subarray - My Array]', base_array);
let result = { subArr: [], maxSum: Number.MIN_SAFE_INTEGER };

ini = performance.now();
getTheMaxSumSubArray(base_array, 1, result);
end = performance.now();

console.log('[3. Max Sum Subarray - Result]', `${JSON.stringify(result)}`);
console.log('[3. Max Sum Subarray - Elapsed time]', `${end - ini} ms`);