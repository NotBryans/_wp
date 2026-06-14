// 網頁設計作業四：10 題 JavaScript 邏輯與演算法練習程式
// 學號：111411230 | 姓名：宋明輝 | 班級：企一乙

console.log("=====================================");
console.log("正在執行 宋明輝 的 10 題 JS 邏輯練習程式...");
console.log("=====================================\n");

// 1. 判斷質數 (Prime Number Tester)
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
console.log(`[第1題] 判斷 17 是否為質數: ${isPrime(17)}`);

// 2. 階乘計算 (Factorial Calculator)
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) result *= i;
    return result;
}
console.log(`[第2題] 計算 5 階乘 (5!): ${factorial(5)}`);

// 3. 費氏數列第 N 項 (Fibonacci Number)
function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    let prev = 0, curr = 1;
    for (let i = 2; i <= n; i++) {
        let next = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr;
}
console.log(`[第3題] 費氏數列第 7 項的值: ${fibonacci(7)}`);

// 4. 陣列加總 (Array Summation)
function sumArray(arr) {
    return arr.reduce((total, num) => total + num, 0);
}
console.log(`[第4題] 陣列 [10, 20, 30, 40] 加總結果: ${sumArray([10, 20, 30, 40])}`);

// 5. 陣列平均值 (Array Average)
function averageArray(arr) {
    return arr.length === 0 ? 0 : sumArray(arr) / arr.length;
}
console.log(`[第5題] 陣列 [85, 90, 95] 平均分數: ${averageArray([85, 90, 95]).toFixed(1)}`);

// 6. 成績評等轉換 (Score Grader)
function getGrade(score) {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
}
console.log(`[第6題] 分數 87 分對應的等第: ${getGrade(87)}`);

// 7. 找尋陣列最大值 (Find Maximum)
function findMax(arr) {
    return Math.max(...arr);
}
console.log(`[第7題] 尋找 [4, 23, 8, 99, 12] 中的最大值: ${findMax([4, 23, 8, 99, 12])}`);

// 8. 字串反轉 (String Reversal)
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(`[第8題] 將 'Kinmen' 字串反轉: ${reverseString('Kinmen')}`);

// 9. 攝氏轉華氏溫度 (Celsius to Fahrenheit)
function cToF(celsius) {
    return (celsius * 9/5) + 32;
}
console.log(`[第9題] 攝氏 28 度轉換為華氏: ${cToF(28)}°F`);

// 10. 檢查迴文結構 (Palindrome Checker)
function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanStr === reverseString(cleanStr);
}
console.log(`[第10題] 檢查 'Racecar' 是否為迴文字串: ${isPalindrome('Racecar')}`);

console.log("\n=====================================");
console.log("所有練習題邏輯運算完全正確，輸出完畢！");
console.log("=====================================");