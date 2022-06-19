/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.ts":
/*!********************!*\
  !*** ./src/App.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst vector_1 = __webpack_require__(/*! ./vector */ \"./src/vector.ts\");\nconst canvas = document.querySelector('.main-canvas');\nconst ctx = canvas.getContext('2d');\nconst fillColor = '#C673D3';\nconst strokeColor = '#80D373';\nlet posX = 10;\nlet posY = 10;\nlet speedX = 12;\nlet speedY = 4;\nconst vec1 = new vector_1.default(2, 4);\nconsole.log(vec1);\nfunction draw() {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    ctx.strokeStyle = strokeColor;\n    ctx.beginPath();\n    ctx.arc(posX, posY, 10, 0, 2 * Math.PI);\n    ctx.fill();\n    posX += speedX;\n    posY += speedY;\n    if (posX > 800 || posX < 0) {\n        speedX *= -1;\n    }\n    if (posY > 800 || posY < 0) {\n        speedY *= -1;\n    }\n    window.requestAnimationFrame(draw);\n}\nwindow.requestAnimationFrame(draw);\n\n\n//# sourceURL=webpack://2d-physics-sim/./src/App.ts?");

/***/ }),

/***/ "./src/vector.ts":
/*!***********************!*\
  !*** ./src/vector.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass Vector {\n    constructor(x = 1, velocityX = 1, y = x, velocityY = velocityX) {\n        this.x = x;\n        this.y = y;\n        this.velocityX = velocityX;\n        this.velocityY = velocityY;\n    }\n}\nexports[\"default\"] = Vector;\n\n\n//# sourceURL=webpack://2d-physics-sim/./src/vector.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/App.ts");
/******/ 	
/******/ })()
;