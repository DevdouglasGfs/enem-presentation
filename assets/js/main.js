"use strict";

function darkmode(e){
    body.classList.toggle("darkmode");
    this.classList.toggle("darkmode");


    const paragraphys = document.querySelectorAll(".essay__desc");
    const lists = document.querySelectorAll(".essay__list");
    paragraphys.forEach( paragraphy => {
        paragraphy.classList.toggle("essay__desc_darkmode");
    })
    lists.forEach(list => {
        list.classList.toggle(".essay__list_darkmode");
    })
}
const darkmodebtn = document.querySelector("#darkmode-btn");

function showDarkModeBtn(e){
    
}

const body = document.querySelector("body");
body.addEventListener('scroll', showDarkModeBtn);
darkmodebtn.addEventListener('click', darkmode);