const arr = [0 ,1 ,2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const colorName = document.getElementById("colorName");
const bodyColor = document.querySelector("body");

function backgroundChange() {
    let hexColor = "#";
    for (let index = 0; index < 6; index++) {
        hexColor += arr[getRandomNumber()];
    }
    colorName.innerText = hexColor;
    bodyColor.style.backgroundColor = hexColor;
    
}
function getRandomNumber() {
    
    let result = Math.floor(Math.random() * arr.length) ;

    return result;
}