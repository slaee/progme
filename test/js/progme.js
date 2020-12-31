/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/html-tag.js":
/*!****************************!*\
  !*** ./src/js/html-tag.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function isInvalidElement(element) {
  if (!(element instanceof Element) && typeof element !== "string") return 1;else return 0;
}

function createTag(tag_name) {
  var property = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (isInvalidElement(tag_name)) throw new Error("".concat(tag_name, " is invalid element"));
  var element = tag_name instanceof Element ? tag_name : document.createElement(tag_name);

  for (var key in property) {
    if (property[key] === undefined) continue;

    if (key === "child") {
      var child = property[key];
      if (element instanceof Node) element.append(child);
    } else if (key == "children" && Array.isArray(property[key])) {
      element.append.apply(element, _toConsumableArray(property[key]));
    } else if (key == "attr") {
      for (var attr in property[key]) {
        element.setAttribute(attr, property[key][attr]);
      }
    } else if (property[key].constructor.name === "Object") {
      for (var obj in property[key]) {
        element[key][obj] = property[key][obj];
      }
    } else {
      element[key] = property[key];
    }
  }

  return element;
}

createTag.get = function (selector) {
  var el = document.querySelector(selector);
  if (!el) return null;
  return createTag(el);
};

createTag.getAll = function (selector) {
  var all = document.querySelectorAll(selector);

  var allAr = _toConsumableArray(all);

  allAr.map(function (el) {
    createTag(el);
  });
  return allAr;
};

createTag.parse = function (html) {
  var div = createTag("div");
  div.innerHTML = html;

  if (div.childElementCount === 1) {
    return createTag(div.firstElementChild);
  } else {
    return _toConsumableArray(div.children);
  }
};

createTag.template = function (html, values) {
  if (values) {
    for (var key in values) {
      if (!/^[a-z_][a-z0-9_\-]*$/.test(key)) continue;
      html = html.replace(new RegExp("{{".concat(key, "}}"), "g"), values[key]);
    }
  }

  html = html.replace(/{{[a-z_][a-z0-9_\-]*}}/g, "");
  return html;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTag);

/***/ }),

/***/ "./src/js/pagerouter.js":
/*!******************************!*\
  !*** ./src/js/pagerouter.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html-tag */ "./src/js/html-tag.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



function Router() {
  var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  for (var key in page) {
    switch (_typeof(page[key])) {
      case "string":
        var link = (0,_html_tag__WEBPACK_IMPORTED_MODULE_0__.default)('a', {
          id: "page",
          href: page[key],
          innerText: key //the property name will be the innerText of the tag

        });
        document.body.append(link);
        break;

      case "function":
        console.log("im a function");
        break;

      case "object":
        console.log("Im an object");
        break;

      default:
        throw new Error("".concat(key, " property value is not a type of page"));
    }
  }
}

Router.createPage = function () {
  var template = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Router);

/***/ }),

/***/ "./src/js/polyfill.js":
/*!****************************!*\
  !*** ./src/js/polyfill.js ***!
  \****************************/
/***/ (() => {

if (!("isConnected" in Node.prototype)) {
  Object.defineProperty(Node.prototype, "isConnected", {
    get: function get() {
      return !this.ownerDocument || !(this.ownerDocument.compareDocumentPosition(this) & this.DOCUMENT_POSITION_DISCONNECTED);
    }
  });
}

if (!("get" in Element.prototype)) {
  Object.defineProperty(Node.prototype, "get", {
    value: function value(selector) {
      return this.querySelector(selector);
    }
  });
}

if (!("getAll" in Element.prototype)) {
  Object.defineProperty(Node.prototype, "getAll", {
    value: function value(selector) {
      return this.querySelectorAll(selector);
    }
  });
}

(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty("append")) {
      return;
    }

    Object.defineProperty(item, "append", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function append() {
        var argArr = Array.prototype.slice.call(arguments),
            docFrag = document.createDocumentFragment();
        argArr.forEach(function (argItem) {
          var isNode = argItem instanceof Node;
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
        });
        this.appendChild(docFrag);
      }
    });
  });
})([Element.prototype, Document.prototype, DocumentFragment.prototype]);

(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty("remove")) {
      return;
    }

    Object.defineProperty(item, "remove", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function remove() {
        if (this.parentNode === null) {
          return;
        }

        this.parentNode.removeChild(this);
      }
    });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

/***/ }),

/***/ "./src/js/progme.js":
/*!**************************!*\
  !*** ./src/js/progme.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _css_progme_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/progme.scss */ "./src/css/progme.scss");
/* harmony import */ var _html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html-tag */ "./src/js/html-tag.js");
/* harmony import */ var _pagerouter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagerouter */ "./src/js/pagerouter.js");
/* harmony import */ var _polyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./polyfill */ "./src/js/polyfill.js");
/* harmony import */ var _polyfill__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_polyfill__WEBPACK_IMPORTED_MODULE_3__);




var ProgMe = {
  createTag: _html_tag__WEBPACK_IMPORTED_MODULE_1__.default,
  Router: _pagerouter__WEBPACK_IMPORTED_MODULE_2__.default
};
window.ProgMe = ProgMe;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProgMe);

/***/ }),

/***/ "./src/css/progme.scss":
/*!*****************************!*\
  !*** ./src/css/progme.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/progme.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9nbWUvLi9zcmMvanMvaHRtbC10YWcuanMiLCJ3ZWJwYWNrOi8vcHJvZ21lLy4vc3JjL2pzL3BhZ2Vyb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vcHJvZ21lLy4vc3JjL2pzL3BvbHlmaWxsLmpzIiwid2VicGFjazovL3Byb2dtZS8uL3NyYy9qcy9wcm9nbWUuanMiLCJ3ZWJwYWNrOi8vcHJvZ21lLy4vc3JjL2Nzcy9wcm9nbWUuc2Nzcz9iNGM3Iiwid2VicGFjazovL3Byb2dtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9nbWUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcHJvZ21lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9nbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9nbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9nbWUvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbImlzSW52YWxpZEVsZW1lbnQiLCJlbGVtZW50IiwiRWxlbWVudCIsImNyZWF0ZVRhZyIsInRhZ19uYW1lIiwicHJvcGVydHkiLCJFcnJvciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImtleSIsInVuZGVmaW5lZCIsImNoaWxkIiwiTm9kZSIsImFwcGVuZCIsIkFycmF5IiwiaXNBcnJheSIsImF0dHIiLCJzZXRBdHRyaWJ1dGUiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJvYmoiLCJnZXQiLCJzZWxlY3RvciIsImVsIiwicXVlcnlTZWxlY3RvciIsImdldEFsbCIsImFsbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhbGxBciIsIm1hcCIsInBhcnNlIiwiaHRtbCIsImRpdiIsImlubmVySFRNTCIsImNoaWxkRWxlbWVudENvdW50IiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJjaGlsZHJlbiIsInRlbXBsYXRlIiwidmFsdWVzIiwidGVzdCIsInJlcGxhY2UiLCJSZWdFeHAiLCJSb3V0ZXIiLCJwYWdlIiwibGluayIsImlkIiwiaHJlZiIsImlubmVyVGV4dCIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlUGFnZSIsInByb3RvdHlwZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwib3duZXJEb2N1bWVudCIsImNvbXBhcmVEb2N1bWVudFBvc2l0aW9uIiwiRE9DVU1FTlRfUE9TSVRJT05fRElTQ09OTkVDVEVEIiwidmFsdWUiLCJhcnIiLCJmb3JFYWNoIiwiaXRlbSIsImhhc093blByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsIndyaXRhYmxlIiwiYXJnQXJyIiwic2xpY2UiLCJjYWxsIiwiYXJndW1lbnRzIiwiZG9jRnJhZyIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJhcmdJdGVtIiwiaXNOb2RlIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsIlN0cmluZyIsIkRvY3VtZW50IiwiRG9jdW1lbnRGcmFnbWVudCIsInJlbW92ZSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsIkNoYXJhY3RlckRhdGEiLCJEb2N1bWVudFR5cGUiLCJQcm9nTWUiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsZ0JBQVQsQ0FBMEJDLE9BQTFCLEVBQW1DO0FBQy9CLE1BQUksRUFBRUEsT0FBTyxZQUFZQyxPQUFyQixLQUFpQyxPQUFPRCxPQUFQLEtBQW1CLFFBQXhELEVBQWtFLE9BQU8sQ0FBUCxDQUFsRSxLQUNLLE9BQU8sQ0FBUDtBQUNSOztBQUVELFNBQVNFLFNBQVQsQ0FBbUJDLFFBQW5CLEVBQTRDO0FBQUEsTUFBZkMsUUFBZSx1RUFBSixFQUFJO0FBQ3hDLE1BQUlMLGdCQUFnQixDQUFDSSxRQUFELENBQXBCLEVBQ0ksTUFBTSxJ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QkFBVSxFQUFFLElBRnNCO0FBR2xDQyxjQUFRLEVBQUUsSUFId0I7QUFJbENQLFdBQUssRUFBRSxTQUFTcUIsTUFBVCxHQUFrQjtBQUNyQixZQUFJLEtBQUtDLFVBQUwsS0FBb0IsSUFBeEIsRUFBOEI7QUFDMUI7QUFDSDs7QUFDRCxhQUFLQSxVQUFMLENBQWdCQyxXQUFoQixDQUE0QixJQUE1QjtBQUNIO0FBVGlDLEtBQXRDO0FBV0gsR0FmRDtBQWdCSCxDQWpCRCxFQWlCRyxDQUFDL0UsT0FBTyxDQUFDa0QsU0FBVCxFQUFvQjhCLGFBQWEsQ0FBQzlCLFNBQWxDLEVBQTZDK0IsWUFBWSxDQUFDL0IsU0FBMUQsQ0FqQkgsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzREE7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNZ0MsTUFBTSxHQUFHO0FBQ1hqRixXQUFTLEVBQUVBLDhDQURBO0FBRVh1QyxRQUFNLEVBQUVBLGdEQUFNQTtBQUZILENBQWY7QUFLQTJDLE1BQU0sQ0FBQ0QsTUFBUCxHQUFnQkEsTUFBaEI7QUFFQSxpRUFBZUEsTUFBZixFOzs7Ozs7Ozs7Ozs7QUNiQTs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Ii4vanMvcHJvZ21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gaXNJbnZhbGlkRWxlbWVudChlbGVtZW50KSB7XHJcbiAgICBpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgRWxlbWVudCkgJiYgdHlwZW9mIGVsZW1lbnQgIT09IFwic3RyaW5nXCIpIHJldHVybiAxO1xyXG4gICAgZWxzZSByZXR1cm4gMDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGFnKHRhZ19uYW1lLCBwcm9wZXJ0eSA9IHt9KSB7XHJcbiAgICBpZiAoaXNJbnZhbGlkRWxlbWVudCh0YWdfbmFtZSkpXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3RhZ19uYW1lfSBpcyBpbnZhbGlkIGVsZW1lbnRgKTtcclxuXHJcbiAgICBsZXQgZWxlbWVudCA9XHJcbiAgICAgICAgdGFnX25hbWUgaW5zdGFuY2VvZiBFbGVtZW50XHJcbiAgICAgICAgICAgID8gdGFnX25hbWVcclxuICAgICAgICAgICAgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ19uYW1lKTtcclxuXHJcbiAgICBmb3IgKGxldCBrZXkgaW4gcHJvcGVydHkpIHtcclxuICAgICAgICBpZiAocHJvcGVydHlba2V5XSA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgaWYgKGtleSA9PT0gXCJjaGlsZFwiKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IHByb3BlcnR5W2tleV07XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgTm9kZSkgXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZChjaGlsZCk7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNlIGlmIChrZXkgPT0gXCJjaGlsZHJlblwiICYmIEFycmF5LmlzQXJyYXkocHJvcGVydHlba2V5XSkpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmQoLi4ucHJvcGVydHlba2V5XSk7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNlIGlmIChrZXkgPT0gXCJhdHRyXCIpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgYXR0ciBpbiBwcm9wZXJ0eVtrZXldKVxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgcHJvcGVydHlba2V5XVthdHRyXSk7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNlIGlmIChwcm9wZXJ0eVtrZXldLmNvbnN0cnVjdG9yLm5hbWUgPT09IFwiT2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgb2JqIGluIHByb3BlcnR5W2tleV0pIFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFtrZXldW29ial0gPSBwcm9wZXJ0eVtrZXldW29ial07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWxlbWVudFtrZXldID0gcHJvcGVydHlba2V5XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbmNyZWF0ZVRhZy5nZXQgPSAoc2VsZWN0b3IpID0+IHtcclxuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICBpZiAoIWVsKSByZXR1cm4gbnVsbDtcclxuICAgIHJldHVybiBjcmVhdGVUYWcoZWwpO1xyXG59O1xyXG5cclxuY3JlYXRlVGFnLmdldEFsbCA9IChzZWxlY3RvcikgPT4ge1xyXG4gICAgY29uc3QgYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcbiAgICBjb25zdCBhbGxBciA9IFsuLi5hbGxdO1xyXG5cclxuICAgIGFsbEFyLm1hcCgoZWwpID0+IHtcclxuICAgICAgICBjcmVhdGVUYWcoZWwpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGFsbEFyO1xyXG59O1xyXG5cclxuY3JlYXRlVGFnLnBhcnNlID0gIChodG1sKSA9PiB7XHJcbiAgICBjb25zdCBkaXYgPSBjcmVhdGVUYWcoXCJkaXZcIik7XHJcbiAgICBkaXYuaW5uZXJIVE1MID0gaHRtbDtcclxuICAgIGlmIChkaXYuY2hpbGRFbGVtZW50Q291bnQgPT09IDEpIHtcclxuICAgICAgICByZXR1cm4gY3JlYXRlVGFnKGRpdi5maXJzdEVsZW1lbnRDaGlsZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBbLi4uZGl2LmNoaWxkcmVuXTtcclxuICAgIH1cclxufTtcclxuXHJcbmNyZWF0ZVRhZy50ZW1wbGF0ZSA9IChodG1sLCB2YWx1ZXMpID0+IHtcclxuICAgIGlmICh2YWx1ZXMpIHtcclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdmFsdWVzKSB7XHJcbiAgICAgICAgICAgIGlmICghL15bYS16X11bYS16MC05X1xcLV0qJC8udGVzdChrZXkpKSBjb250aW51ZTtcclxuICAgICAgICAgICAgaHRtbCA9IGh0bWwucmVwbGFjZShuZXcgUmVnRXhwKGB7eyR7a2V5fX19YCwgXCJnXCIpLCB2YWx1ZXNba2V5XSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoL3t7W2Etel9dW2EtejAtOV9cXC1dKn19L2csIFwiXCIpO1xyXG4gICAgcmV0dXJuIGh0bWw7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUYWc7IiwiaW1wb3J0IGNyZWF0ZVRhZyBmcm9tIFwiLi9odG1sLXRhZ1wiO1xyXG5cclxuZnVuY3Rpb24gUm91dGVyKHBhZ2UgPSB7fSl7XHJcbiAgICBmb3IobGV0IGtleSBpbiBwYWdlKXtcclxuICAgICAgICBzd2l0Y2godHlwZW9mIHBhZ2Vba2V5XSl7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzdHJpbmdcIjpcclxuICAgICAgICAgICAgICAgIGxldCBsaW5rID0gY3JlYXRlVGFnKCdhJywge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcInBhZ2VcIixcclxuICAgICAgICAgICAgICAgICAgICBocmVmOiBwYWdlW2tleV0sXHJcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJUZXh0OiBrZXkgLy90aGUgcHJvcGVydHkgbmFtZSB3aWxsIGJlIHRoZSBpbm5lclRleHQgb2YgdGhlIHRhZ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChsaW5rKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJmdW5jdGlvblwiOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbSBhIGZ1bmN0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJvYmplY3RcIjpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW0gYW4gb2JqZWN0XCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2tleX0gcHJvcGVydHkgdmFsdWUgaXMgbm90IGEgdHlwZSBvZiBwYWdlYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5Sb3V0ZXIuY3JlYXRlUGFnZT0gZnVuY3Rpb24odGVtcGxhdGUgPSB7fSl7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb3V0ZXI7IiwiaWYgKCEoXCJpc0Nvbm5lY3RlZFwiIGluIE5vZGUucHJvdG90eXBlKSkge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5vZGUucHJvdG90eXBlLCBcImlzQ29ubmVjdGVkXCIsIHtcclxuICAgICAgICBnZXQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAhdGhpcy5vd25lckRvY3VtZW50IHx8XHJcbiAgICAgICAgICAgICAgICAhKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3duZXJEb2N1bWVudC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbih0aGlzKSAmXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ET0NVTUVOVF9QT1NJVElPTl9ESVNDT05ORUNURURcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5pZiAoIShcImdldFwiIGluIEVsZW1lbnQucHJvdG90eXBlKSkge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5vZGUucHJvdG90eXBlLCBcImdldFwiLCB7XHJcbiAgICAgICAgdmFsdWUoc2VsZWN0b3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG59XHJcblxyXG5pZiAoIShcImdldEFsbFwiIGluIEVsZW1lbnQucHJvdG90eXBlKSkge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5vZGUucHJvdG90eXBlLCBcImdldEFsbFwiLCB7XHJcbiAgICAgICAgdmFsdWUoc2VsZWN0b3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG59XHJcblxyXG4oZnVuY3Rpb24gKGFycikge1xyXG4gICAgYXJyLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICBpZiAoaXRlbS5oYXNPd25Qcm9wZXJ0eShcImFwcGVuZFwiKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdGVtLCBcImFwcGVuZFwiLCB7XHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmQoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYXJnQXJyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSxcclxuICAgICAgICAgICAgICAgICAgICBkb2NGcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGFyZ0Fyci5mb3JFYWNoKGZ1bmN0aW9uIChhcmdJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzTm9kZSA9IGFyZ0l0ZW0gaW5zdGFuY2VvZiBOb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY0ZyYWcuYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzTm9kZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBhcmdJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFN0cmluZyhhcmdJdGVtKSlcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRDaGlsZChkb2NGcmFnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59KShbRWxlbWVudC5wcm90b3R5cGUsIERvY3VtZW50LnByb3RvdHlwZSwgRG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGVdKTtcclxuXHJcbihmdW5jdGlvbiAoYXJyKSB7XHJcbiAgICBhcnIuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIGlmIChpdGVtLmhhc093blByb3BlcnR5KFwicmVtb3ZlXCIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGl0ZW0sIFwicmVtb3ZlXCIsIHtcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudE5vZGUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSkoW0VsZW1lbnQucHJvdG90eXBlLCBDaGFyYWN0ZXJEYXRhLnByb3RvdHlwZSwgRG9jdW1lbnRUeXBlLnByb3RvdHlwZV0pO1xyXG4iLCJpbXBvcnQgXCIuLi9jc3MvcHJvZ21lLnNjc3NcIjtcclxuXHJcbmltcG9ydCBjcmVhdGVUYWcgZnJvbSBcIi4vaHRtbC10YWdcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwiLi9wYWdlcm91dGVyXCI7XHJcbmltcG9ydCBcIi4vcG9seWZpbGxcIjtcclxuXHJcbmNvbnN0IFByb2dNZSA9IHtcclxuICAgIGNyZWF0ZVRhZzogY3JlYXRlVGFnLFxyXG4gICAgUm91dGVyOiBSb3V0ZXIsXHJcbn07XHJcblxyXG53aW5kb3cuUHJvZ01lID0gUHJvZ01lO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZ01lO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvanMvcHJvZ21lLmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==