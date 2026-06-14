// 網頁設計作業三：Node.js 基礎環境測試
// 學號：111411230 | 姓名：宋明輝 | 班級：企一乙

const studentInfo = {
    school: "國立金門大學",
    department: "企業管理學系 一年級乙班",
    id: "111411230",
    name: "宋明輝"
};

function sayHello(student) {
    console.log("=====================================");
    console.log(`哈囉！這是 ${student.name} 的第一個 Node.js 執行測試程式。`);
    console.log(`系統認證資訊：${student.school} | ${student.department} | 學號：${student.id}`);
    console.log("網頁設計作業三執行完全成功！");
    console.log("=====================================");
}

// 執行函數
sayHello(studentInfo);