import {buildPage1} from "./page-one.js"
import {buildPage2} from "./page-two.js"
import "./styles.css";


function removeOldElements() {
    const containerDiv = document.querySelector("#main-content")

    while (containerDiv.firstChild) {containerDiv.removeChild(containerDiv.firstChild)}    
}


document.querySelector("#btn1").addEventListener("click", () => buildPageX(1))
document.querySelector("#btn2").addEventListener("click", () => buildPageX(2))

function buildPageX(x) {
    removeOldElements()
    if (x == 1) buildPage1()
    if (x == 2) buildPage2()
}