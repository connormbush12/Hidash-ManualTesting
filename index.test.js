//This is our custom testing of forEach.
const {forEach, map} = require('./index')

let sum = 0;
forEach([1, 2, 3], (value) => {
    sum += value;
})

//With our test case above, we expect the sum to be 6. Therefore, we throw an error if the sum is NOT 6. If it is, we don't do anything, which indicates the test was successful.
if (sum !== 6) {
    throw new Error('Expected sum of array was 6')
}

//This is our custom testing of map.
const result = map([1, 2, 3], value => {
    return value*2;
})

//With our test case above, we expect the result array to bo [2,4,6]. Therefore, we throw an error if either of those array elements is incorrect. If it is, we don't do anything, which indicates the test was successful.
if(result[0] !== 2) {
    throw new Error(`Expected result to be 2 but received ${result[0]}`)
}

if(result[1] !== 4) {
    throw new Error(`Expected result to be 4 but received ${result[1]}`)
}

if(result[2] !== 6) {
    throw new Error(`Expected result to be 6 but received ${result[2]}`)
}