const {forEach, map} = require('./index')

//There are three current issues with our testing file:
//1. Can't reuse variable names
//2. If we throw an error, it doesn't execute the rest of the tests in our test file
//3. No indication of what test is being run

//We can solve all three of these by utilizing a testing function
//We pass through two arguments, a description of the test we are about to run and a function
const test = (desc, fn) => {
    //We console.log the description. This solves issue #3 listed above
    console.log('----', desc);
    //Instead of simply running the function, we use a try and catch block. That way, if we do hit an error, we catch it and simply console.log it as opposed to ending the execution of the file. This solves issue #2
    try {
        fn();
    } catch (err) {
        console.log(err.message)
    }
}

test('The forEach function', () => {
    //Finally, since these are scoped within a function now, we can reuse variables such as 'sum' or 'result' over and over again
    let sum = 0;
    forEach([1, 2, 3], (value) => {
        sum += value;
    })
    if (sum !== 6) {
        throw new Error('Expected sum of array was 6')
    }
})

test('The map function', () => {
    const result = map([1, 2, 3], value => {
        return value*2;
    })
    
    if(result[0] !== 2) {
        throw new Error(`Expected result to be 2 but received ${result[0]}`)
    }
    
    if(result[1] !== 4) {
        throw new Error(`Expected result to be 4 but received ${result[1]}`)
    }
    
    if(result[2] !== 6) {
        throw new Error(`Expected result to be 6 but received ${result[2]}`)
    }
})