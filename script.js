let divEl = document.getElementById("div1");
console.log(divEl)
const classDivEl = document.querySelector(".div-el")
const selectAllDivs = document.querySelectorAll(".list");
console.log(classDivEl)

// classDivEl.addEventListener("click", sayHello)

// function sayHello() {
//     divEl.innerHTML = "helloworld"
// }

const btnOn = document.getElementById("btn-on")
const btnOff = document.getElementById("btn-off")
const display = document.getElementById("display")

btnOn.addEventListener("click", () => {
    display.innerHTML = "Light On!"
    display.style.backgroundColor = "green"
})
btnOff.addEventListener("click", () => {
    display.innerHTML = "Light Off!"
    display.style.backgroundColor = "red"
    display.style.padding = "10px"
})

//css selectors : *, ., #, div, 
//divEl camel caseing 
//snake casing div_El
//how to change the css property of class groups selected with .querySelectorAll using javascript!