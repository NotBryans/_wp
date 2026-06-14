// 作業七：10 題 JavaScript 核心物件與進階部落格邏輯練習
// 學號：111411230 | 姓名：宋明輝 | 班級：企一乙

console.log("=====================================");
console.log("正在執行 宋明輝 的作業七 10 題核心邏輯練習...");
console.log("=====================================\n");

// 1. 物件屬性存取 (Object Property Access)
const post = { id: 1, title: "Hello World", content: "Markdown content" };
console.log("1. 點符號存取:", post.title);
console.log("   中括號存取:", post["title"]);
console.log("-------------------------------------");

// 2. 物件解構賦值 (Object Destructuring)
const req = { body: { title: "JS教學", content: "內容在此", author: "Gemini" } };
const { title, content } = req.body; // 一行常數宣告取出
console.log("2. 解構賦值結果 - 標題:", title, "| 內容:", content);
console.log("-------------------------------------");

// 3. 陣列的遍歷與字串拼接 (Array forEach & Template Literals)
const posts = [{id: 1, t: "A"}, {id: 2, t: "B"}];
let html = "";
posts.forEach(p => {
    html += `<div>${p.t}</div>`;
});
console.log("3. 遍歷拼接後的 HTML 字串:", html);
console.log("-------------------------------------");

// 4. 字典與動態參數 (URL Params / Dictionary)
let params = {};
params["id"] = 99;
console.log("4. 動態新增屬性後的物件:", params);
console.log("-------------------------------------");

// 5. Callback 函數傳參 (Error-First Callback)
function fetchData(id, callback) {
    const fakeData = { id: id, status: "success" };
    callback(null, fakeData); // 第一參數為錯誤(null)，第二參數為資料
}
fetchData(101, (err, data) => {
    if (err) console.log("5. 發生錯誤：" + err);
    else console.log("5. 成功取得資料：", data);
});
console.log("-------------------------------------");

// 6. JSON 處理 (Parsing JSON)
const jsonStr = '{"title": "Post 1", "tags": ["js", "node"]}';
let obj = JSON.parse(jsonStr);
console.log("6. 解析 JSON 物件中的 tags 第二個元素:", obj.tags[1]);
console.log("-------------------------------------");

// 7. 模擬資料庫查詢 (Simulating Database Query)
function fakeGet(sql, inputParams, callback) {
    const fakeRow = { id: 1, title: "掌握 JavaScript 函數", content: "這是一篇關於 Callback 的文章..." };
    callback(null, fakeRow);
}
fakeGet("SELECT * FROM posts WHERE id = ?", [1], (err, row) => {
    if (err) console.error("7. 查詢失敗");
    else console.log("7. 抓到的文章標題是：", row.title);
});
console.log("-------------------------------------");

// 8. 樣板字串中的邏輯運算 (Template Literals with Logic)
let user = "Guest";
let welcomeHtml = `<h1>Welcome, ${user ? user : "Stranger"}</h1>`;
console.log("8. 樣板字串邏輯輸出結果:", welcomeHtml);
console.log("-------------------------------------");

// 9. 陣列物件的排序與切片 (Sort & Substring)
const stringArray = ["Very long content here", "Another Very long content here", "3rd Very long content here"];
console.log("9. 字串前 10 個字元切片展示：");
stringArray.forEach((str, idx) => {
    console.log(`   項目 ${idx + 1}: ${str.substring(0, 10)}...`);
});
console.log("-------------------------------------");

// 10. 錯誤優先回呼模式 (Error-First Callback Pattern)
function checkAdmin(role, callback) {
    if (role !== "admin") callback("Access Denied");
    else callback(null, "Welcome");
}
checkAdmin("guest", (err, msg) => {
    console.log("10. 測試非 Admin 狀態 -> 錯誤捕捉:", err);
});
checkAdmin("admin", (err, msg) => {
    console.log("10. 測試 Admin 狀態 -> 成功訊息:", msg);
});

console.log("\n=====================================");
console.log("作業七 符合教授 10 題看懂網誌關鍵題型，執行完畢！");
console.log("=====================================");