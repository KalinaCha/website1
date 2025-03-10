const colors = ["red", "blue", "green", "purple", "orange", "yellow", "pink"];
let index = 0;

document.getElementById("colorButton").addEventListener("click", function(){
    document.body.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length
});
