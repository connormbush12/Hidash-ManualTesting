//This is a very simple recreation of the array method forEach.
module.exports = {
    forEach(arr, fn) {
        for (let i=0; i<arr.length; i++) {
            const value = arr[i];
            return fn(value, i);
        }
    }
}