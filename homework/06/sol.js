// 作業六：10 題進階 JavaScript 函式與陣列操作實作
// 111411230 宋明輝 企一乙

console.log("=====================================");
console.log("正在執行 宋明輝 的作業六進階 10 題函式練習...");
console.log("=====================================\n");

// 1. 控制權反轉與回呼機制 (Callback)
function mathTool(x, y, callback) { return callback(x, y); }
console.log("js1 - 相加結果:", mathTool(5, 3, (a, b) => a + b));

// 2. 立即執行函式 (IIFE) 與詞法環境隔離
(() => {
    let count = 99;
    console.log("js2 - IIFE 隔離變數計數:", count);
})();

// 3. 宣告式編程與資料映射 (Map 價格 8 折運算)
const prices = [100, 200, 500];
const discountPrices = prices.map(p => p * 0.8);
console.log("js3 - 原始價格:", prices, "-> 8折後:", discountPrices);

// 4. 陣列變異操作與副作用 (Mutation)
function cleanData(arr) {
    arr.pop();
    arr.unshift(999);
    return arr;
}
console.log("js4 - 陣列變異操作結果:", cleanData([1, 2, 3]));

// 5. 高階函式與閉包記憶體保留 (Multiplier Factory)
function multiplier(factor) {
    return (num) => num * factor;
}
const double = multiplier(2);
console.log("js5 - 閉包工廠(2倍加乘器)計算 15:", double(15));

// 6. 底層邏輯重構：自訂 Callback 篩選器
function myFilter(arr, predicate) {
    let output = [];
    for(let item of arr) { if(predicate(item)) output.push(item); }
    return output;
}
console.log("js6 - 自訂篩選大於10:", myFilter([5, 12, 8, 20], x => x > 10));

// 7. 複合資料結構處理 (Object Array Filtering)
const users = [{name:"A", age:15}, {name:"B", age:22}, {name:"C", age:19}];
const adults = users.filter(u => u.age >= 18);
console.log("js7 - 篩選成年人結果:", adults);

// 8. 記憶體陷阱：傳址與重新賦值差異
function testReference(arr) {
    arr.push("變更"); // 會影響外部
    arr = ["全新變數"]; // 重新賦值不會影響外部
}
let mainArr = [1, 2];
testReference(mainArr);
console.log("js8 - 外部陣列最終狀態:", mainArr);

// 9. 非同步任務排程 (Event Loop / Macrotask Queue)
console.log("js9 - 同步任務執行：開始");
setTimeout(() => { console.log("js9 - 非同步排程任務：執行中..."); }, 0);
console.log("js9 - 同步任務執行：結束");

// 10. 資料聚合與商業邏輯注入綜合應用
function calculateTotal(arr, discountFunc) {
    let total = arr.reduce((sum, val) => sum + val, 0);
    return discountFunc(total);
}
console.log("js10 - 綜合結帳總金額(滿千折百):", calculateTotal([400, 700], t => t >= 1000 ? t - 100 : t));

console.log("\n=====================================");
console.log("作業六 10 題核心功能完全對齊，執行完畢！");
console.log("=====================================");