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

// console.log(result);




// Sum of Each Row in a Matrix

const matrix_data_2 = [
    [1, 3, 10, 22],
    [3, 4],
    [3, 10]
];

const sumOffEachRow = (matrix_data_2) => {

    let sum = [];

    for (let row of matrix_data_2) {
        let rowsum = row.reduce((a, b) => a + b);
        sum.push(rowsum);

    }
    return sum;
}

const ans = sumOffEachRow(matrix_data_2);

// console.log(ans);




// Sum of Each Column in a Matrix

const matrix_data_3 = [
    [1, 2],
    [3, 4],
    [3, 10]
];

const sumOffEachColumn = (matrix_data_3) => {

    let sum = [];




    for (let i = 0; i < matrix_data_3[0].length; i++) {
        let colsum = 0;
        for (let j = 0; j < matrix_data_3.length; j++) {
            colsum += matrix_data_3[j][i];
        }
        sum.push(colsum);
    }
    return sum;
}

const ans2 = sumOffEachColumn(matrix_data_3);

console.log(ans2);

