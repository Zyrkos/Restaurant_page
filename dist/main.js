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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/home */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/contact */ \"./src/modules/contact.js\");\n\r\n\r\n\r\n\r\nconst website = () => {\r\n  const container = document.getElementById(\"container\");\r\n  const createHeader = () => {\r\n    const header = document.createElement(\"div\");\r\n    header.classList.add(\"header\");\r\n\r\n    const navbar = createNavbar();\r\n\r\n    header.appendChild(navbar);\r\n    container.appendChild(header);\r\n  };\r\n\r\n  const createNavbar = () => {\r\n    const nav = document.createElement(\"nav\");\r\n    nav.classList.add(\"navbar\");\r\n    nav.id = \"navbar\";\r\n\r\n    const linkData = [\r\n      { id: \"link-home\", text: \"Home\", href: \"#\" },\r\n      { id: \"link-menu\", text: \"Menu\", href: \"#\" },\r\n      { id: \"link-contact\", text: \"Contacts\", href: \"#\" },\r\n    ];\r\n\r\n    const links = linkData.map(({ id, text, href }) => {\r\n      const link = document.createElement(\"a\");\r\n      link.id = id;\r\n      link.href = href;\r\n      link.textContent = text;\r\n\r\n      const listItem = document.createElement(\"li\");\r\n      listItem.appendChild(link);\r\n\r\n      return listItem; // Return li element\r\n    });\r\n\r\n    const ul = document.createElement(\"ul\");\r\n    ul.className = \"nav-list\";\r\n    ul.id = \"tabs\";\r\n    ul.append(...links);\r\n\r\n    nav.appendChild(ul);\r\n    return nav;\r\n  };\r\n\r\n  const createMain = () => {\r\n    const tabs = document.getElementById(\"tabs\");\r\n    let currentTab;\r\n\r\n    (0,_modules_home__WEBPACK_IMPORTED_MODULE_0__.createHome)();\r\n    currentTab = document.getElementById(\"home-main\");\r\n\r\n    tabs.addEventListener(\"click\", function eventHandler(e) {\r\n      if (e.target.id === \"link-home\") {\r\n        //check if the current link clicked is the same as link-home\r\n        if (currentTab !== document.getElementById(\"home-main\")) {\r\n          //if the link click isn't the currentTab\r\n          if (currentTab) {\r\n            currentTab.remove(); //removes the current tab\r\n          }\r\n          (0,_modules_home__WEBPACK_IMPORTED_MODULE_0__.createHome)(); //passes the module\r\n          currentTab = document.getElementById(\"home-main\"); //sets the current module as the currentTab\r\n        }\r\n      } else if (e.target.id === \"link-menu\") {\r\n        if (currentTab !== document.getElementById(\"menu-main\")) {\r\n          if (currentTab) {\r\n            currentTab.remove();\r\n          }\r\n          (0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__.createMenu)();\r\n          currentTab = document.getElementById(\"menu-main\");\r\n        }\r\n      } else if (e.target.id === \"link-contact\") {\r\n        if (currentTab !== document.getElementById(\"contact-main\")) {\r\n          if (currentTab) {\r\n            currentTab.remove();\r\n          }\r\n          (0,_modules_contact__WEBPACK_IMPORTED_MODULE_2__.createContact)();\r\n          currentTab = document.getElementById(\"contact-main\");\r\n        }\r\n      }\r\n    });\r\n  };\r\n\r\n  createHeader();\r\n  createMain();\r\n};\r\n\r\nwebsite();\r\n\n\n//# sourceURL=webpack://restaurant_page/./src/index.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createContact\": () => (/* binding */ createContact)\n/* harmony export */ });\nfunction createContact() {\r\n  const main = document.createElement(\"main\");\r\n  main.setAttribute(\"id\", \"contact-main\");\r\n\r\n  /*--------------------------------------------*/\r\n  const headerSpan = document.createElement(\"span\");\r\n  headerSpan.classList.add(\"header-span\");\r\n\r\n  const headline = document.createElement(\"h1\");\r\n  headline.textContent = \"Contacts\";\r\n  headerSpan.appendChild(headline);\r\n\r\n  const footer = document.createElement(\"footer\");\r\n\r\n  const licenseSpan = document.createElement(\"span\");\r\n  licenseSpan.classList.add(\"license-span\");\r\n  const copywright = document.createElement(\"p\");\r\n  copywright.textContent = \"© Pedro Castro 2023\";\r\n\r\n  licenseSpan.appendChild(copywright);\r\n  footer.appendChild(licenseSpan);\r\n\r\n  container.appendChild(main);\r\n  headerSpan.appendChild(headline);\r\n  main.appendChild(headerSpan);\r\n  main.appendChild(footer);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant_page/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHome\": () => (/* binding */ createHome)\n/* harmony export */ });\nfunction createHome() {\r\n  const main = document.createElement(\"main\");\r\n  main.setAttribute(\"id\", \"home-main\");\r\n  main.classList.add(\"main\");\r\n  /*--------------------------------------------*/\r\n  const headerSpan = document.createElement(\"span\");\r\n  headerSpan.classList.add(\"header-span\");\r\n\r\n  const headline = document.createElement(\"h1\");\r\n  headline.textContent = \"Welcome to Plant-Based Sintra\";\r\n  headerSpan.appendChild(headline);\r\n\r\n  const footer = document.createElement(\"footer\");\r\n\r\n  const creditSpan = document.createElement(\"span\");\r\n  creditSpan.classList.add(\"credit-span\");\r\n\r\n  const licenseSpan = document.createElement(\"span\");\r\n  licenseSpan.classList.add(\"license-span\");\r\n  const copywright = document.createElement(\"p\");\r\n  copywright.textContent = \"© Pedro Castro 2023\";\r\n\r\n  const imgCredit = document.createElement(\"a\");\r\n  imgCredit.textContent = \"Photo by Anna Pelzer\";\r\n  imgCredit.href = \"https://unsplash.com/@annapelzer\";\r\n\r\n  licenseSpan.appendChild(copywright)\r\n  footer.appendChild(licenseSpan);\r\n  creditSpan.appendChild(imgCredit);\r\n\r\n  footer.appendChild(creditSpan);\r\n  container.appendChild(main);\r\n  headerSpan.appendChild(headline);\r\n  main.appendChild(headerSpan);\r\n  main.appendChild(footer);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant_page/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMenu\": () => (/* binding */ createMenu)\n/* harmony export */ });\nfunction createMenu() {\r\n  const main = document.createElement(\"main\");\r\n  main.setAttribute(\"id\", \"menu-main\");\r\n\r\n  /*---------------------------------------------*/\r\n\r\n  const leftSidePage = document.createElement(\"div\");\r\n  leftSidePage.setAttribute(\"class\", \"left-side-page\");\r\n\r\n  const rightSidePage = document.createElement(\"div\");\r\n  rightSidePage.setAttribute(\"class\", \"right-side-page\");\r\n\r\n  const menuHeader = document.createElement(\"span\");\r\n  menuHeader.setAttribute(\"class\", \"menu-header\");\r\n\r\n  const h1 = document.createElement(\"h1\");\r\n  h1.textContent = \"All days\";\r\n\r\n  menuHeader.appendChild(h1);\r\n\r\n  const menuGridWrapper = document.createElement(\"div\");\r\n  menuGridWrapper.classList.add(\"menu-grid-wrapper\");\r\n\r\n  const menu = [\r\n    {\r\n      category: \"Entrees\",\r\n      items: [\r\n        {\r\n          name: \"Vegan Sushi Rolls\",\r\n          description: \"Tofu, avocado, and vegetables\",\r\n        },\r\n        { name: \"Jackfruit BBQ\", description: \"Served with whole grain bread\" },\r\n        {\r\n          name: \"Stuffed Bell Peppers\",\r\n          description: \"Filled with quinoa, black beans, and vegetables\",\r\n        },\r\n        {\r\n          name: \"Vegan Pho Noodle Soup\",\r\n          description:\r\n            \"Made with vegetable broth, tofu, and a variety of vegetables\",\r\n        },\r\n      ],\r\n    },\r\n    {\r\n      category: \"Main Course\",\r\n      items: [\r\n        {\r\n          name: \"Lentil Shepherd's Pie\",\r\n          description: \"Made with red lentils, basil and tomato sauce\",\r\n        },\r\n        {\r\n          name: \"Vegan Lasagna\",\r\n          description:\r\n            \"Made with layers of tofu, cashew cream, and vegetable sauce\",\r\n        },\r\n        {\r\n          name: \"Chickpea Curry\",\r\n          description:\r\n            \"Made with a variety of vegetables and served with naan bread\",\r\n        },\r\n        {\r\n          name: \"Beyond Burger\",\r\n          description:\r\n            \"Served in whole grain bun, with tomato slices and lettuce\",\r\n        },\r\n      ],\r\n    },\r\n    {\r\n      category: \"Drinks\",\r\n      items: [\r\n        {\r\n          name: \"Mango Lassi\",\r\n          description: \"Made with coconut yogurt and cardamom\",\r\n        },\r\n        {\r\n          name: \"Coconut and Pineapple Smoothie\",\r\n          description: \"Made with coconut milk and vanilla extract\",\r\n        },\r\n        {\r\n          name: \"Vegan Matcha Latte\",\r\n          description: \"Made with almond milk and sweetened with maple syrup\",\r\n        },\r\n        {\r\n          name: \"Raspberry and Rosewater Spritzer\",\r\n          description: \"Made with sparkling water and agave nectar\",\r\n        },\r\n      ],\r\n    },\r\n  ];\r\n\r\n  // Loop through each category and create the corresponding HTML elements\r\n  menu.forEach((category) => {\r\n    // Create a new grid item for the category\r\n    const gridItem = document.createElement(\"div\");\r\n    gridItem.classList.add(\"grid-item\");\r\n\r\n    // Add the category title to the grid item\r\n    const categoryTitle = document.createElement(\"h3\");\r\n    categoryTitle.textContent = category.category;\r\n    gridItem.appendChild(categoryTitle);\r\n\r\n    // Loop through each item in the category and create the corresponding HTML elements\r\n    category.items.forEach((item) => {\r\n      // Create a new item element\r\n      const itemElement = document.createElement(\"div\");\r\n\r\n      // Add the item name to the item element\r\n      const itemName = document.createElement(\"h4\");\r\n      itemName.textContent = item.name;\r\n      itemElement.appendChild(itemName);\r\n\r\n      // Add the item description to the item element\r\n      const itemDescription = document.createElement(\"p\");\r\n      itemDescription.classList.add(\"description\");\r\n      itemDescription.textContent = item.description;\r\n      itemElement.appendChild(itemDescription);\r\n\r\n      // Add a horizontal line separator after the item element\r\n      const line = document.createElement(\"span\");\r\n      line.classList.add(\"line\");\r\n      itemElement.appendChild(line);\r\n\r\n      // Add the item element to the grid item\r\n      gridItem.appendChild(itemElement);\r\n    });\r\n\r\n    // Add the grid item to the menu grid container\r\n    menuGridWrapper.appendChild(gridItem);\r\n  });\r\n\r\n  rightSidePage.appendChild(menuHeader);\r\n  rightSidePage.appendChild(menuGridWrapper);\r\n\r\n  main.appendChild(leftSidePage);\r\n  main.appendChild(rightSidePage);\r\n\r\n  container.appendChild(main);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant_page/./src/modules/menu.js?");

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