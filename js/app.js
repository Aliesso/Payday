'use strict'
var sliderWidth = document.querySelector(".slider").clientWidth;
var sliderLength = document.querySelectorAll(".slider li").length
var sliderUl = document.querySelector(".slider ul")
var nextIco = document.querySelector(".next")
var prevIco = document.querySelector(".prev")
var cloneFirstSlider = document.querySelector(".slider li").cloneNode(true)
var cloneLastSlider = document.querySelectorAll(".slider li")[sliderLength - 1].cloneNode(true)
document.querySelector(".slider ul").appendChild(cloneFirstSlider)
document.querySelector(".slider ul").prepend(cloneLastSlider)
sliderLength = document.querySelectorAll(".slider li").length
var mySliderWidth = sliderWidth * sliderLength;

var c = 1;

sliderUl.style.left = -(c * sliderWidth) + "px"

sliderUl.style.width = mySliderWidth + "px"

prevIco.onclick = function() {
    prevIco.classList.add("disabled")
    sliderUl.style.transition = ".s ease"
    myPrevSlider();
}

document.addEventListener("transitionend", function() {
    nextIco.classList.remove("disabled")
    prevIco.classList.remove("disabled")
    if (c == sliderLength - 1) {
        sliderUl.style.transition = "none";
        c = 1
        sliderUl.style.left = -(c * sliderWidth) + "px"
    } else if (c == 0) {
        sliderUl.style.transition = "none";
        c = sliderLength - 2
        sliderUl.style.left = -(c * sliderWidth) + "px"
    }
})
nextIco.onclick = function() {
    nextIco.classList.add("disabled")
    sliderUl.style.transition = ".7s ease"
    myNextSlider();
}

function myPrevSlider() {
    c--;
    if (c == -1) {
        c = sliderLength - 1;
    }
    sliderUl.style.left = -(c * sliderWidth) + "px"

}

function myNextSlider() {
    c++;
    if (c == sliderLength) {
        c = 0;
    }
    sliderUl.style.left = -(c * sliderWidth) + "px"

}

var myInt = setInterval(myNextSlider, 4000);

window.onscroll = function() {
    if (document.documentElement.scrollTop > 250) {
        header.classList.add("head-active")
    } else {
        header.classList.remove("head-active")
    }
}

var closeIco = document.querySelector("#chat .close-chat")
var chat = document.getElementById("chat")
var miniChat = document.getElementById("mini-chat")
var myInp = document.querySelector("#message-box")
var main = document.querySelector("#chat main")
closeIco.onclick = function() {
    chat.classList.add("active")
}
miniChat.onclick = function() {
    chat.classList.remove("active")
}
myInp.addEventListener("keyup", function(e) {
    if (e.keyCode == 13) {
        if (myInp.value.trim() != "") {
            if (myInp.value[0].toUpperCase() == myInp.value[0]) {
                AddChat("support")
            } else {
                AddChat("user")
            }
        }
    }
})

function AddChat(clName) {
    var dt = new Date();

    var main = document.querySelector("#chat main")
    main.insertAdjacentHTML("beforeend", `
    <div class="message ${clName}">
                <p>${myInp.value}</p>
                <p class="time">${dt.getHours() + ":" + dt.getMinutes()}</p>
            </div>`)
    myInp.value = ""
    main.scrollTop = main.scrollHeight
}