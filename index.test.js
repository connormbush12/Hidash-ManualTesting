//This is our custom testing of forEach.
const {forEach} = require('./index')

let sum = 0;
forEach([1, 2, 3], (value) => {
    sum += value;
})

//With our test case above, we expect the sum to be 6. Therefore, we throw an error if the sum is NOT 6. If it is, we don't do anything, which indicates the test was successful.
if (sum !== 6) {
    throw new Error('Expected sum of array was 6')
}