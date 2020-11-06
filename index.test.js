//The Node JS library Assertion Testing allows us to simplify our validation checking for our testing. As opposed to using if statements over and over, we can use the Assertion Testing methods assert.strictEqual and assert.deepStrictEqual
const assert = require('assert')
const {forEach, map} = require('./index')

//Instead of using our custom test function (commented out below), we can use Mocha JS. We install it on our machines. Then to test our code, in the terminal instead of using "node index.test.js", we use "mocha index.test.js"

// const test = (desc, fn) => {
//     console.log('----', desc);
//     try {
//         fn();
//     } catch (err) {
//         console.log(err.message)
//     }
// }

//The only thing we have to do to use Mocha is change our test function to 'it'
it('The forEach function', () => {
    let sum = 0;
    forEach([1, 2, 3], (value) => {
        sum += value;
    })
    assert.strictEqual(sum, 6)
})

it('The map function', () => {
    const result = map([1, 2, 3], value => {
        return value*2;
    })
    assert.deepStrictEqual(result, [2,4,6])
})