"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vector_1 = require("./vector");
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');
const fillColor = '#C673D3';
const strokeColor = '#80D373';
let posX = 10;
let posY = 10;
let speedX = 12;
let speedY = 4;
const vec1 = new vector_1.default(2, 4);
console.log(vec1);
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = strokeColor;
    ctx.beginPath();
    ctx.arc(posX, posY, 10, 0, 2 * Math.PI);
    ctx.fill();
    posX += speedX;
    posY += speedY;
    if (posX > 800 || posX < 0) {
        speedX *= -1;
    }
    if (posY > 800 || posY < 0) {
        speedY *= -1;
    }
    window.requestAnimationFrame(draw);
}
window.requestAnimationFrame(draw);
//# sourceMappingURL=App.js.map