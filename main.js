document.addEventListener("DOMContentLoaded", function () {
    let title = document.getElementById("change_heading");
    title.innerText = "Welcome to my Racing Game!";

    let colorSection = document.querySelector("section");
    let selectedColor = document.querySelector(".selected")
    colorSection.addEventListener("mouseover", function (event) {
        selectedColor.innerText = event.target.className;
    })
})

let newDiv = document.createElement("div");
newDiv.className = "purple";
newDiv.style.backgroundColor = "purple";

let section = document.querySelector("section");
section.appendChild(newDiv);

let car1 = document.querySelector(".car1");
let car2 = document.querySelector(".car2");
let startButton = document.querySelector("button");

startButton.addEventListener("click", function (event) {
    let timerId = setInterval(function () {
        car1.style.marginLeft = (parseInt(car1.style.marginLeft) || 0) + Math.floor(Math.random() * 10) + 1 + 'px';
        car2.style.marginLeft = (parseInt(car2.style.marginLeft) || 0) + Math.floor(Math.random() * 10) + 1 + 'px';

    }, 500);
    setTimeout(function () {
        clearTimeout(timerId);
        alert("winner!");
    }, 20000);
})
