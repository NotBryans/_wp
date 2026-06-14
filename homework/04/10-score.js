// 網頁設計作業四：10 題 JavaScript 邏輯與演算法練習程式 (依範本重構)
// 學號：111411230 | 姓名：宋明輝 | 班級：企一乙

console.log("=====================================");
console.log("正在執行 宋明輝 的 10 題 JS 邏輯練習程式...");
console.log("=====================================\n");

// 1. 基礎數字運算
function checkNumber(num) {
    if (num > 0) return "正數";
    if (num < 0) return "負數";
    return "這是零";
}
console.log("1. 數字測試 10:", checkNumber(10));
console.log("   數字測試 -5:", checkNumber(-5));
console.log("   數字測試 0:", checkNumber(0));
console.log("-------------------------------------");

// 2. 九九乘法表 (展示到 3)
console.log("2. 九九乘法表展示：");
for (let i = 1; i <= 3; i++) {
    let row = "";
    for (let j = 1; j <= 3; j++) {
        row += `${i} * ${j} = ${i * j}   `;
    }
    console.log(`   ${row}`);
}
console.log("-------------------------------------");

// 3. 陣列加總與平均
const data = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < data.length; i++) {
    sum += data[i];
}
const result = { total: sum, average: sum / data.length };
console.log("3. 陣列加總與平均結果：", result);
console.log("-------------------------------------");

// 4. 猜數字遊戲
let target = 3;
let guess = 0;
console.log("4. 模擬猜數字遊戲：");
while (guess !== target) {
    guess++;
    console.log("   當前猜測數字：" + guess);
}
console.log("   中獎！數字是 " + guess);
console.log("-------------------------------------");

// 5. 聯絡人清單
let user = {
    name: "Gemini",
    email: "old@mail.com",
    updateEmail: function (newEmail) {
        this.email = newEmail;
    }
};
console.log("5. 聯絡人信箱更新前：", user.email);
user.updateEmail("hello@google.com");
console.log("   聯絡人信箱更新後：", user.email);
console.log("-------------------------------------");

// 6. 訂單篩選器 (JSON 解析)
const jsonString = '[{"id":1, "price":800}, {"id":2, "price":1500}, {"id":3, "price":2000}]';
const orders = JSON.parse(jsonString);
let highValue = [];
for (let i = 0; i < orders.length; i++) {
    if (orders[i].price > 1000) highValue.push(orders[i].id);
}
console.log("6. 高額訂單 ID 清單：", highValue);
console.log("-------------------------------------");

// 7. 購物車計算
const cart = [
    { name: "咖啡", price: 50, qty: 2 },
    { name: "三明治", price: 80, qty: 1 }
];
let total = 0;
for (let item of cart) {
    total += item.price * item.qty;
}
console.log("7. 購物車應付總金額：", total);
console.log("-------------------------------------");

// 8. 倒數計時器
console.log("8. 執行倒數計時器：");
function countDown(n) {
    while (n >= 0) {
        if (n === 0) console.log("   時間到！");
        else console.log("   " + n + "...");
        n--;
    }
}
countDown(3);
console.log("-------------------------------------");

// 9. 字串反轉工具
function reverseString(str) {
    return str.split("").reverse().join("");
}
const original = "Apple";
console.log(`9. 字串反轉前: ${original} -> 反轉後: ${reverseString(original)}`);
console.log("-------------------------------------");

// 10. 成績管理系統
const students = [
    { name: "小明", score: 60 },
    { name: "小華", score: 95 }
];
let topStudent = students[0];
for (let s of students) {
    if (s.score > topStudent