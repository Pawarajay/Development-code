// console.log("Ajay");
// // console.log(window);
// window.console.log("hello");
// window.alert("hi");
console.log("Hello")


function changeText()
{
  let element = document.getElementById("demo");
  element.textContent ="Now change the text using the dom"
}

function click2()
{
    let elem = document.getElementById("demo2");
    elem.textContent ="This is the another id & chage usign the dom"
}

document.getElementById("demo").textContent ="Change the text using javascript ";
// document.getElementById("demo2").innerHTML =<b>Updated content</b>

let newPara = document.createElement("p")
newPara.textContent ="THis text is written by usign the js "
document.body.appendChild(newPara)

let heading = document.createElement("h1")
heading.innerText = "Write this heading usign the javascript"
document.body.appendChild(heading)

// let remov = document.getElementById("demo")
// remov.remove()

function sayHello()
{
    console.log("Hello")
}
let btn = document.getElementById("btn")
btn.addEventListener("click" ,sayHello);


function addClass()
{
  document.getElementById("ex").classList.add("highlight")
}

function removeClass()
{
  document.getElementById("ex").classList.remove("highlight")
}


function toggleClass()
{
  document.getElementById("ex").classList.toggle("highlight")
}

let div = document.querySelector(".container")
div.addEventListener('click',function(e){

    container.style.color = "black" });

