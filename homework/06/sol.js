// === 1. 基礎函數定義與呼叫 (Function Definition) ===
function greet(name) {
  return `Hello, ${name}!`;
}
console.log("Q1:", greet("明輝"));

// === 2. 數值計算函數 (Sum Function) ===
function add(a, b) {
  return a + b;
}
console.log("Q2:", add(15, 27));

// === 3. 陣列總和計算 (Array Sum Loop) ===
function sumArray(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
console.log("Q3:", sumArray([1, 2, 3, 4, 5]));

// === 4. 華氏轉攝氏溫度 (Temperature Conversion) ===
function fahrenheitToCelsius(f) {
  return (f - 32) * 5 / 9;
}
console.log("Q4 (98.6°F to °C):", fahrenheitToCelsius(98.6));

// === 5. 簡易陣列最大值篩選 (Find Max) ===
function findMax(arr) {
  return Math.max(...arr);
}
console.log("Q5:", findMax([10, 5, 8, 23, 14]));