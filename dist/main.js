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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("/* import { createHome } from \"./modules/home\";\r\nimport { createMenu } from \"./modules/menu\";\r\nimport { createContact } from \"./modules/contact\"; */\r\n\r\nconst website = () => {\r\n  const createHeader = () => {\r\n    const container = document.getElementById(\"container\");\r\n    const header = document.createElement(\"div\");\r\n    header.classList.add(\"header\");\r\n\r\n    container.appendChild(\"header\");\r\n  };\r\n\r\n  /* const createNavbar = () => {\r\n    const navbar = document.createElement(\"nav\");\r\n    nav.className = \"navbar\";\r\n    nav.id = \"navbar\";\r\n\r\n    const linkData = [\r\n      { id: \"link-home\", text: \"Home\" },\r\n      { id: \"link-menu\", text: \"Menu\" },\r\n      { id: \"link-contact\", text: \"Contact\" },\r\n    ];\r\n\r\n    const links = linkData.map(({ id, text }) => {\r\n      const link = document.createElement(\"a\");\r\n      link.id = id;\r\n      link.href = \"#\";\r\n      link.textContent = text;\r\n      return link;\r\n    });\r\n\r\n    const ul = document.createElement(\"ul\");\r\n    ul.className = \"nav-list\";\r\n    ul.id = \"tabs\";\r\n    ul.append(...links);\r\n\r\n    return navbar;\r\n  }; */\r\n\r\n  createHeader();\r\n\r\n  return { createHeader };\r\n};\r\n\r\nwebsite()\r\n\r\n/* const createMain = () => {\r\n      const main = document.createElement(\"main\");\r\n      main.className = \"main\";\r\n      main.id = \"main\";\r\n      return main;\r\n    }; */\r\n\n\n//# sourceURL=webpack://restaurant_page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;