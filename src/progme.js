import './css/progme.css';

import createTag from "./js/html-tag";
import "./js/polyfill";

function ProgMe(){
    let div = createTag('div');

    document.body.append(div);
}

ProgMe(); 