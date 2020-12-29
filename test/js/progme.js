(()=>{var e={498:()=>{"isConnected"in Node.prototype||Object.defineProperty(Node.prototype,"isConnected",{get:function(){return!(this.ownerDocument&&this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}}),"get"in Element.prototype||Object.defineProperty(Node.prototype,"get",{value:function(e){return this.querySelector(e)}}),"getAll"in Element.prototype||Object.defineProperty(Node.prototype,"getAll",{value:function(e){return this.querySelectorAll(e)}}),[Element.prototype,Document.prototype,DocumentFragment.prototype].forEach((function(e){e.hasOwnProperty("append")||Object.defineProperty(e,"append",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=Array.prototype.slice.call(arguments),t=document.createDocumentFragment();e.forEach((function(e){var r=e instanceof Node;t.appendChild(r?e:document.createTextNode(String(e)))})),this.appendChild(t)}})})),[Element.prototype,CharacterData.prototype,DocumentType.prototype].forEach((function(e){e.hasOwnProperty("remove")||Object.defineProperty(e,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){null!==this.parentNode&&this.parentNode.removeChild(this)}})}))}},t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}(()=>{"use strict";function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,r){if(e){if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function n(e){return e instanceof Element||"string"==typeof e?0:1}function o(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(n(t))throw new Error("".concat(t," is invalid element"));var o=t instanceof Element?t:document.createElement(t);for(key in r)if(void 0!==r[key])if("child"===key){var i=r[key];o instanceof Node&&o.append(i)}else if("children"==key&&Array.isArray(r[key]))o.append.apply(o,e(r[key]));else if("attr"==key)for(var a in r[key])o.setAttribute(a,r[key][a]);else if("Object"===r[key].constructor.name)for(var c in r[key])o[key][c]=r[key][c];else o[key]=r[key];return o}o.get=function(e){var t=document.querySelector(e);return t?o(t):null},o.getAll=function(t){var r=e(document.querySelectorAll(t));return r.map((function(e){o(e)})),r},o.parse=function(t){var r=o("div");return r.innerHTML=t,1===r.childElementCount?o(r.firstElementChild):e(r.children)},o.template=function(e,t){if(t)for(var r in t)/^[a-z_][a-z0-9_\-]*$/.test(r)&&(e=e.replace(new RegExp("{{".concat(r,"}}"),"g"),t[r]));return e.replace(/{{[a-z_][a-z0-9_\-]*}}/g,"")};const i=o;var a;r(498),a=i("div"),document.body.append(a)})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9nbWUvanMvcHJvZ21lLmpzIl0sIm5hbWVzIjpbIl9fd2VicGFja19tb2R1bGVzX18iLCI0OTgiLCJOb2RlIiwicHJvdG90eXBlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJ0aGlzIiwib3duZXJEb2N1bWVudCIsImNvbXBhcmVEb2N1bWVudFBvc2l0aW9uIiwiRE9DVU1FTlRfUE9TSVRJT05fRElTQ09OTkVDVEVEIiwiRWxlbWVudCIsInZhbHVlIiwic2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCIsIkRvY3VtZW50IiwiRG9jdW1lbnRGcmFnbWVudCIsImZvckVhY2giLCJpdGVtIiwiaGFzT3duUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwid3JpdGFibGUiLCJhcmdBcnIiLCJBcnJheSIsInNsaWNlIiwiY2FsbCIsImFyZ3VtZW50cyIsImRvY0ZyYWciLCJkb2N1bWVudCIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJhcmdJdGVtIiwiaXNOb2RlIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsIlN0cmluZyIsIkNoYXJhY3RlckRhdGEiLCJEb2N1bWVudFR5cGUiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiYXJyIiwiaXNBcnJheSIsIl9hcnJheUxpa2VUb0FycmF5IiwiX2FycmF5V2l0aG91dEhvbGVzIiwiaXRlciIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiZnJvbSIsIl9pdGVyYWJsZVRvQXJyYXkiLCJvIiwibWluTGVuIiwibiIsInRvU3RyaW5nIiwiY29uc3RydWN0b3IiLCJuYW1lIiwidGVzdCIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIlR5cGVFcnJvciIsIl9ub25JdGVyYWJsZVNwcmVhZCIsImxlbiIsImxlbmd0aCIsImkiLCJhcnIyIiwiaXNJbnZhbGlkRWxlbWVudCIsImVsZW1lbnQiLCJjcmVhdGVUYWciLCJ0YWdfbmFtZSIsInByb3BlcnR5IiwidW5kZWZpbmVkIiwiRXJyb3IiLCJjb25jYXQiLCJjcmVhdGVFbGVtZW50Iiwia2V5IiwiY2hpbGQiLCJhcHBlbmQiLCJhcHBseSIsImF0dHIiLCJzZXRBdHRyaWJ1dGUiLCJvYmoiLCJlbCIsImdldEFsbCIsImFsbEFyIiwibWFwIiwicGFyc2UiLCJodG1sIiwiZGl2IiwiaW5uZXJIVE1MIiwiY2hpbGRFbGVtZW50Q291bnQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImNoaWxkcmVuIiwidGVtcGxhdGUiLCJ2YWx1ZXMiLCJfa2V5IiwicmVwbGFjZSIsIlJlZ0V4cCIsImh0bWxfdGFnIiwiYm9keSJdLCJtYXBwaW5ncyI6IkFBQVMsTUFDQyxJQUFJQSxFQUFzQixDQUU5QkMsSUFDQSxLQUVBLGdCQUFpQkMsS0FBS0MsV0FDMUJDLE9BQU9DLGVBQWVILEtBQUtDLFVBQVcsY0FBZSxDQUNuREcsSUFBSyxXQUNILFFBQVFDLEtBQUtDLGVBQW1CRCxLQUFLQyxjQUFjQyx3QkFBd0JGLE1BQVFBLEtBQUtHLG1DQUt4RixRQUFTQyxRQUFRUixXQUNyQkMsT0FBT0MsZUFBZUgsS0FBS0MsVUFBVyxNQUFPLENBQzNDUyxNQUFPLFNBQWVDLEdBQ3BCLE9BQU9OLEtBQUtPLGNBQWNELE1BSzFCLFdBQVlGLFFBQVFSLFdBQ3hCQyxPQUFPQyxlQUFlSCxLQUFLQyxVQUFXLFNBQVUsQ0FDOUNTLE1BQU8sU0FBZUMsR0FDcEIsT0FBT04sS0FBS1EsaUJBQWlCRixNQTBCaEMsQ0FBQ0YsUUFBUVIsVUFBV2EsU0FBU2IsVUFBV2MsaUJBQWlCZCxXQXBCdERlLFNBQVEsU0FBVUMsR0FDaEJBLEVBQUtDLGVBQWUsV0FJeEJoQixPQUFPQyxlQUFlYyxFQUFNLFNBQVUsQ0FDcENFLGNBQWMsRUFDZEMsWUFBWSxFQUNa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