// 作業六：JavaScript 函數與陣列邏輯處理
// 111411230 宋明輝 企一乙

// 1. 向量加法
function vadd(a, b) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        result.push(a[i] + b[i]);
    }
    return result;
}
console.log("向量加法 [1,2] + [3,4] =", vadd([1,2], [3,4]));

// 2. 矩陣加法
function madd(a, b) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        let row = [];
        for (let j = 0; j < a[i].length; j++) {
            row.push(a[i][j] + b[i][j]);
        }
        result.push(row);
    }
    return result;
}
console.log("矩陣加法 =", madd([[1,2],[3,4]], [[5,6],[7,8]]));

// 3. 矩陣相乘
function mmul(a, b) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        let row = [];
        for (let j = 0; j < b[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < a[0].length; k++) {
                sum += a[i][k] * b[k][j];
            }
            row.push(sum);
        }
        result.push(row);
    }
    return result;
}
console.log("矩陣相乘 =", mmul([[1,2]], [[3],[4]]));