"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vector {
    constructor(x = 1, velocityX = 1, y = x, velocityY = velocityX) {
        this.x = x;
        this.y = y;
        this.velocityX = velocityX;
        this.velocityY = velocityY;
    }
}
exports.default = Vector;
//# sourceMappingURL=vector.js.map
