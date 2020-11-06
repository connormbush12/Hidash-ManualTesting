module.exports = {
    forEach(arr, fn) {
        for (let i=0; i<arr.length; i++) {
            const value = arr[i];
            fn(value, i);
        }
    },

    //Now, we recreated the map function. It esentially does the same thing as forEach, but it pushes the result into a new array.
    map(arr, fn) {
        //We have to establish result outside of the for loop so that we can return it outside of the for loop
        const result = [];
        for (let i=0; i<arr.length; i++) {
            result.push(fn(arr[i], i));
        }
        return result;
    }
}