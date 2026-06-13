// === 1. 物件屬性存取 (Object Property Access) ===
const post = { id: 1, title: "Hello World", content: "Markdown content" };
console.log("Q1 (Dot):", post.title);
console.log("Q1 (Bracket):", post['title']);

// === 2. 物件解構賦值 (Object Destructuring) ===
const req = { body: { title: "JS教學", content: "內容在此", author: "Gemini" } };
const { title, content } = req.body;
console.log("Q2:", title, "|", content);

// === 3. 陣列的遍歷與字串拼接 (Array forEach) ===
const posts = [{id: 1, t: "A"}, {id: 2, t: "B"}];
let html = "";
posts.forEach(p => { html += `<div>${p.t}</div>`; });
console.log("Q3:\n", html);

// === 4. 字典與動態參數 (URL Params / Dictionary) ===
const params = {};
params["id"] = 99;
console.log("Q4:", params);

// === 5. Callback 函數傳參 (Callback) ===
function fetchData(id, callback) {
  callback(null, { id: id, status: "success" });
}
fetchData(101, (err, data) => { console.log("Q5:", data); });

// === 6. JSON 處理 (Parsing JSON) ===
const jsonStr = '{"title": "Post 1", "tags": ["js", "node"]}';
const obj = JSON.parse(jsonStr);
console.log("Q6:", obj.tags[1]);

// === 7. 非同步處理 (Async / Await) ===
async function getPostData() {
  return { id: 1, title: "Async Post" };
}
async function runQ7() {
  const result = await getPostData();
  console.log("Q7:", result.title);
}
runQ7();

// === 8. 陣列對應轉換 (Array Map) ===
const rawPosts = [{id: 1, title: "hello"}, {id: 2, title: "world"}];
const cleanTitles = rawPosts.map(p => p.title);
console.log("Q8:", cleanTitles);

// === 9. 模組導出與導入概念 (Modules) ===
const blogModule = {
  render: (title) => `<h1>${title}</h1>`
};
console.log("Q9:", blogModule.render("My Blog"));

// === 10. 物件陣列篩選 (Array Filter) ===
const numbers = [5, 12, 8, 130, 44];
const filtered = numbers.filter(num => num > 10);
console.log("Q10:", filtered);