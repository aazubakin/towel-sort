// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined || matrix.length === 0) return [];
    // if (matrix[1].length === undefined) return matrix.sort((a, b) => a - b);

    for (let i = 0; i < matrix.length; i++) {
        if (!Array.isArray(matrix[i])) return matrix;
        if (i % 2 !== 0) matrix[i].reverse();
    }
    return matrix.flat();
}

console.log(module.exports([
    [1, 2],
    [3, 4],
])); // 

console.log(module.exports([3, 5, 6, 1, 2]))
