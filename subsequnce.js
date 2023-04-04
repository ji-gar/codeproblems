function findsubsqunce(mainarray, subarray) {
    let i = 0;
    let j = 0;
    while (i < mainarray.length && j < subarray.length) {
        if (mainarray[i] === subarray[j]) {
            j++;
            console.log(subarray[j]);
        }
        i++;
    }
    return j === subarray.length;
}
console.log(findsubsqunce([ 5, 1, 22, 25, 6, -1, 8, 10],[1, 6, -1, 10] ));