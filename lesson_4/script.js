var p = document.querySelectorAll('p')
// console.log(p)

var myClass = document.querySelectorAll('.myClass')
// console.log(myClass)

var onlyP = document.querySelector("#onlyP")
// console.log(onlyP)

var button = document.querySelector("#myButton")
button.addEventListener('click', (e)=>{
    alert("pushed!")
    console.log(e.clientX, e.clientY)
})

function setup() {
    createCanvas(400, 400);
}
  
function draw() {
    background(220);
}

function mousePressed() {
    console.log(mouseX, mouseY)
}