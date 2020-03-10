//Allows gridContainer to be manipulated in JavaSCript
const gridContainer = document.querySelector("#gridContainer")
//Creates 256 div elements to be formed into a 16x16 grid

let divList = document.querySelectorAll(".divList")
let divArr = Array.prototype.slice.call(divList);

function genHtml() {
    for (let i = 1; i <= 256; i++) {
    const divGrid = document.createElement("div")
    divGrid.classList.add("divList")
    divGrid.addEventListener("mouseenter", function( event ) {   
        // highlight the mouseenter target
        event.target.style.backgroundColor = "purple";
    })

    gridContainer.appendChild(divGrid)
    //divGrid.textContent = "div"
    }
}
genHtml();
