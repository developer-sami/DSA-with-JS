// Write a function to find the largest number in a matrix


const matrix = [
    [1, 2],
    [3, 4],
    [3, 10]
];

const findLargNum = (matrix) => {

    largeNumber = 0;

    for (let row of matrix) {
        for (let num of row) {
            if (num > largeNumber) {
                largeNumber = num;
            } else {
                continue
            }
        }
    }
    return largeNumber;
}

const result = findLargNum(matrix);

console.log(result);