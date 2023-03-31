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

eval("/* import { createHome } from \"./modules/home\";\r\nimport { createMenu } from \"./modules/menu\";\r\nimport { createContact } from \"./modules/contact\"; */\r\n\r\nconst website = () => {\r\n  const container = document.getElementById(\"container\");\r\n  const createHeader = () => {\r\n    const header = document.createElement(\"div\");\r\n    header.classList.add(\"header\");\r\n\r\n    const navbar = createNavbar(); // Call createNavbar function to get the navbar element\r\n\r\n    header.appendChild(navbar); // Append navbar to header\r\n    container.appendChild(header);\r\n  };\r\n\r\n  const createNavbar = () => {\r\n    const nav = document.createElement(\"nav\"); // fixed variable name\r\n    nav.classList.add(\"navbar\");\r\n    nav.id = \"navbar\";\r\n  \r\n    const linkData = [\r\n      { id: \"link-home\", text: \"Home\", href: \"#\" },\r\n      { id: \"link-menu\", text: \"Menu\", href: \"#\" },\r\n      { id: \"link-contact\", text: \"Contact\", href: \"#\" },\r\n    ];\r\n  \r\n    const links = linkData.map(({ id, text, href }) => {\r\n      const link = document.createElement(\"a\");\r\n      link.id = id;\r\n      link.href = href;\r\n      link.textContent = text;\r\n  \r\n      const listItem = document.createElement(\"li\");\r\n      listItem.appendChild(link);\r\n  \r\n      return listItem; // Return li element\r\n    });\r\n  \r\n    const ul = document.createElement(\"ul\");\r\n    ul.className = \"nav-list\";\r\n    ul.id = \"tabs\";\r\n    ul.append(...links);\r\n  \r\n    nav.appendChild(ul); // Append ul element to nav\r\n    return nav; // Return nav element\r\n  };\r\n\r\n  const createMain = () => {\r\n    const main = document.createElement(\"main\");\r\n    main.classList.add(\"main\");\r\n\r\n    const flexWrapper = document.createElement(\"div\");\r\n    flexWrapper.classList.add(\"flex-wrapper\");\r\n\r\n    const contentDiv = document.createElement(\"div\");\r\n    contentDiv.classList.add(\"content-div\");\r\n\r\n    container.appendChild(main);\r\n    main.appendChild(flexWrapper);\r\n    flexWrapper.appendChild(contentDiv);\r\n  };\r\n\r\n  \r\n  createHeader();\r\n  createMain();\r\n};\r\n\r\nwebsite(); // Call the website function to create the header and navbar\r\n\n\n//# sourceURL=webpack://restaurant_page/./src/index.js?");

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