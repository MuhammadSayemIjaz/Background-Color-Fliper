const arr = ["Red","Yellow","Green","Gray","Purple","Gold","Violet"];
const colorName = document.getElementById("colorName");
const bodyColor = document.querySelector("body");

function getRandomNumber(min , max) {
    let step1 = max - min + 1;
    let step2 = Math.random()*step1;
    let step3 = Math.floor(step2) + min;

    return step3;
}
function backgroundChange() {
    let index = getRandomNumber(0, arr.length-1);
    colorName.innerText = arr[index];
    bodyColor.style.backgroundColor = arr[index];
}