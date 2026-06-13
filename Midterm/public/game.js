const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
let score = 0;
let gameInterval;

function startGame() {
    document.getElementById('gameOver').style.display = 'none';
    score = 0;
    document.getElementById('score').innerText = score;
    clearInterval(gameInterval);
    gameInterval = setInterval(updateGame, 1000);
}

function updateGame() {
    score += 10;
    document.getElementById('score').innerText = score;
    
    // 清除畫布並繪製方塊模擬遊戲狀態
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#e43f5a';
    ctx.fillRect(50, (score * 2) % 500, 30, 30);
    ctx.fillStyle = '#00fff5';
    ctx.fillRect(120, (score * 1.5) % 500, 30, 30);
}