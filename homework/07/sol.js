// 作業七：JavaScript 核心物件與進階邏輯運算
// 111411230 宋明輝 企一乙

// 1. 統計字串中單字出現的次數
function countWords(str) {
    let words = str.toLowerCase().split(/\s+/);
    let map = {};
    for (let w of words) {
        if (w === "") continue;
        map[w] = (map[w] || 0) + 1;
    }
    return map;
}
console.log("單字統計:", countWords("Hello world hello Gemini"));

// 2. 自訂計數器物件控制項目
class Counter {
    constructor() {
        this.value = 0;
    }
    increment() {
        this.value++;
        return this;
    }
    decrement() {
        this.value--;
        return this;
    }
    get() {
        return this.value;
    }
}
const c = new Counter();
console.log("計數器連續操作結果:", c.increment().increment().decrement().get());