/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.ts":
/*!********************!*\
  !*** ./src/App.ts ***!
  \********************/
/***/ (() => {

eval("const canvas = document.querySelector('.main-canvas');\nconst ctx = canvas.getContext('2d');\nconst fillColor = '#C673D3';\nconst strokeColor = '#80D373';\nlet posX = 10;\nlet posY = 10;\nlet speedX = 12;\nlet speedY = 4;\nfunction draw() {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    ctx.strokeStyle = strokeColor;\n    ctx.beginPath();\n    ctx.arc(posX, posY, 10, 0, 2 * Math.PI);\n    ctx.fill();\n    posX += speedX;\n    posY += speedY;\n    if (posX > 800 || posX < 0) {\n        speedX *= -1;\n    }\n    if (posY > 800 || posY < 0) {\n        speedY *= -1;\n    }\n    window.requestAnimationFrame(draw);\n}\nwindow.requestAnimationFrame(draw);\n\n\n//# sourceURL=webpack://2d-physics-sim/./src/App.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/App.ts"]();
/******/ 	
/******/ })()
;