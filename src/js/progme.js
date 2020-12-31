import "../css/progme.scss";
/**
 * Import here the worker functions of the framework
 */
import createTag from "./html-tag";
import Router from "./pagerouter";
import "./polyfill"; //import only once

//the default functions of the modules must be putted here as object of ProgMe
const ProgMe = {
    createTag: createTag,
    Router: Router,
};

//polyfill to define ProgMe outside the module see the index.js in the /test/ folder
window.ProgMe = ProgMe;

export default ProgMe;
