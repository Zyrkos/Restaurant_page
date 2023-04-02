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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/home */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/contact */ \"./src/modules/contact.js\");\n\r\n\r\n\r\n\r\nconst website = () => {\r\n  const container = document.getElementById(\"container\");\r\n  const createHeader = () => {\r\n    const header = document.createElement(\"div\");\r\n    header.classList.add(\"header\");\r\n\r\n    const navbar = createNavbar();\r\n\r\n    header.appendChild(navbar);\r\n    container.appendChild(header);\r\n  };\r\n\r\n  const createNavbar = () => {\r\n    const nav = document.createElement(\"nav\");\r\n    nav.classList.add(\"navbar\");\r\n    nav.id = \"navbar\";\r\n\r\n    const linkData = [\r\n      { id: \"link-home\", text: \"Home\", href: \"#\" },\r\n      { id: \"link-menu\", text: \"Menu\", href: \"#\" },\r\n      { id: \"link-contact\", text: \"Contact\", href: \"#\" },\r\n    ];\r\n\r\n    const links = linkData.map(({ id, text, href }) => {\r\n      const link = document.createElement(\"a\");\r\n      link.id = id;\r\n      link.href = href;\r\n      link.textContent = text;\r\n\r\n      const listItem = document.createElement(\"li\");\r\n      listItem.appendChild(link);\r\n\r\n      return listItem; // Return li element\r\n    });\r\n\r\n    const ul = document.createElement(\"ul\");\r\n    ul.className = \"nav-list\";\r\n    ul.id = \"tabs\";\r\n    ul.append(...links);\r\n\r\n    nav.appendChild(ul);\r\n    return nav;\r\n  };\r\n\r\n  const createMain = () => {\r\n    const tabs = document.getElementById(\"tabs\");\r\n    let currentTab;\r\n\r\n    (0,_modules_home__WEBPACK_IMPORTED_MODULE_0__.createHome)();\r\n    currentTab = document.getElementById(\"home-main\");\r\n\r\n    tabs.addEventListener(\"click\", function eventHandler(e) {\r\n      if (e.target.id === \"link-home\") {\r\n        //check if the current link clicked is the same as link-home\r\n        if (currentTab !== document.getElementById(\"home-main\")) {\r\n          //if the link click isn't the currentTab\r\n          if (currentTab) {\r\n            currentTab.remove(); //removes the current tab\r\n          }\r\n          (0,_modules_home__WEBPACK_IMPORTED_MODULE_0__.createHome)(); //passes the module\r\n          currentTab = document.getElementById(\"home-main\"); //sets the current module as the currentTab\r\n        }\r\n      } else if (e.target.id === \"link-menu\") {\r\n        if (currentTab !== document.getElementById(\"menu-main\")) {\r\n          if (currentTab) {\r\n            currentTab.remove();\r\n          }\r\n          (0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__.createMenu)();\r\n          currentTab = document.getElementById(\"menu-main\");\r\n        }\r\n      } else if (e.target.id === \"link-contact\") {\r\n        if (currentTab !== document.getElementById(\"contact-main\")) {\r\n          if (currentTab) {\r\n            currentTab.remove();\r\n          }\r\n          (0,_modules_contact__WEBPACK_IMPORTED_MODULE_2__.createContact)();\r\n          currentTab = document.getElementById(\"contact-main\");\r\n        }\r\n      }\r\n    });\r\n  };\r\n\r\n  createHeader();\r\n  createMain();\r\n};\r\n\r\nwebsite();\r\n\n\n//# sourceURL=webpack://restaurant_page/./src/index.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createContact\": () => (/* binding */ createContact)\n/* harmony export */ });\nfunction createContact() {\r\n  const main = document.createElement(\"main\");\r\n  main.setAttribute(\"id\", \"contact-main\");\r\n  main.classList.add(\"main\");\r\n  /*--------------------------------------------*/\r\n  const flexWrapper = document.createElement(\"div\");\r\n  flexWrapper.classList.add(\"flex-wrapper\");\r\n\r\n  const contentDiv = document.createElement(\"div\");\r\n  contentDiv.classList.add(\"content-div\");\r\n\r\n  const headerSpan = document.createElement(\"span\");\r\n  headerSpan.classList.add(\"headerSpan\");\r\n\r\n  const headline = document.createElement(\"h1\");\r\n  headline.textContent = \"Contact\";\r\n  headerSpan.appendChild(headline);\r\n\r\n  const para = document.createElement(\"p\");\r\n  para.textContent =\r\n    \"Placeholder Conctacs\";\r\n\r\n  flexWrapper.appendChild(headerSpan);\r\n  contentDiv.appendChild(para);\r\n  container.appendChild(main);\r\n  main.appendChild(flexWrapper);\r\n  flexWrapper.appendChild(contentDiv);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant_page/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHome\": () => (/* binding */ createHome)\n/* harmony export */ });\nfunction createHome() {\r\n  const main = document.createElement(\"main\");\r\n  main.setAttribute(\"id\", \"home-main\");\r\n  main.classList.add(\"main\");\r\n  /*--------------------------------------------*/\r\n  const flexWrapper = document.createElement(\"div\");\r\n  flexWrapper.classList.add(\"flex-wrapper\");\r\n\r\n  const contentDiv = document.createElement(\"div\");\r\n  contentDiv.classList.add(\"content-div\");\r\n\r\n  const headerSpan = document.createElement(\"span\");\r\n  headerSpan.classList.add(\"headerSpan\");\r\n\r\n  const headline = document.createElement(\"h1\");\r\n  headline.textContent = \"Home\";\r\n  headerSpan.appendChild(headline);\r\n\r\n  const para = document.createElement(\"p\");\r\n  para.textContent =\r\n    \"Welcome to Plant Based Sintra, your favourite vegan restaurant\";\r\n\r\n  flexWrapper.appendChild(headerSpan);\r\n  contentDiv.appendChild(para);\r\n  container.appendChild(main);\r\n  main.appendChild(flexWrapper);\r\n  flexWrapper.appendChild(contentDiv);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant_page/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMenu\": () => (/* binding */ createMenu)\n/* harmony export */ });\nfunction createMenu() {\r\n  const main = document.createElement(\"main\");\r\n  main.setAttribute(\"id\", \"menu-main\")\r\n  main.classList.add(\"main\");\r\n  /*---------------------------------------------*/\r\n  const flexWrapper = document.createElement(\"div\");\r\n  flexWrapper.classList.add(\"flex-wrapper\");\r\n\r\n  const contentDiv = document.createElement(\"div\");\r\n  contentDiv.classList.add(\"content-div\");\r\n\r\n  const headerSpan = document.createElement(\"span\");\r\n  headerSpan.classList.add(\"headerSpan\");\r\n\r\n  const headline = document.createElement(\"h1\");\r\n  headline.textContent = \"Menu\";\r\n  headerSpan.appendChild(headline);\r\n\r\n  const para = document.createElement(\"p\");\r\n  para.textContent =\r\n    \"Placeholder Menu\";\r\n\r\n  flexWrapper.appendChild(headerSpan);\r\n  contentDiv.appendChild(para);\r\n  container.appendChild(main);\r\n  main.appendChild(flexWrapper);\r\n  flexWrapper.appendChild(contentDiv);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant_page/./src/modules/menu.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;