//The Node JS library Assertion Testing allows us to simplify our validation checking for our testing. As opposed to using if statements over and over, we can use the Assertion Testing methods assert.strictEqual and assert.deepStrictEqual
const assert = require('assert')
const {forEach, map} = require('./index')


const test = (desc, fn) => {
    console.log('----', desc);
    try {
        fn();
    } catch (err) {
        console.log(err.message)
    }
}

test('The forEach function', () => {
    let sum = 0;
    forEach([1, 2, 3], (value) => {
        sum += value;
    })
    //Using assert.strictEqual, we are saying "throw an error if sum is not strictly equal to 6"
    assert.strictEqual(sum, 6)
})

test('The map function', () => {
    const result = map([1, 2, 3], value => {
        return value*2;
    })
    
    //With assert.deepStrictEqual, we are saying "throw an error if result is not an array with the elements: 2, 4, and 6 (in that order)"
    assert.deepStrictEqual(result, [2,4,6])
})