document.addEventListener('DOMContentLoaded', function() {
    // Your code here

const texts = [ "DISCOVER", "LEVEL UP", "SUCCEED"];
let currentIndex = 0;

// Function to change the heading text
function changeText() {
const heading = document.getElementById("animated-heading");
heading.textContent = texts[currentIndex];
currentIndex = (currentIndex + 1) % texts.length;
}

// Call the function initially
changeText();

// Set interval to change text every 3 seconds
setInterval(changeText, 1000);





// var col = document.querySelectorAll(".random")
// console.log(col)
// for(var i=0;i<col.length;i++){
//  col[i].style.color=changeColor();
// }

// function getRandomColor(){
//     var letters='9876543210ABCDEF';
//     var color="#";
//     for(var i=0;i<=5;i++){
//         color += letters[Math.floor(Math.random()*16)];
//     }
//     return color;
// }
// function changeColor(){
//     input=getRandomColor();
//     for(var i=0;i<col.length;i++){
//         col[i].style.color=input;
//    }
// }
// setInterval(changeColor,1000);
// 
})


