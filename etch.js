//Allows gridContainer to be manipulated in JavaSCript
const gridContainer = document.querySelector("#gridContainer")
//Creates 256 div elements to be formed into a 16x16 grid
gridContainer.style.gridTemplateColumns = "repeat(16, 1fr)"
gridContainer.style.gridTemplateRows = "repeat(16, 1fr)"
gridContainer.style.borderColor = "black"
function genHtml() {
    for (let i = 1; i <= 256; i++) {
    const divGrid = document.createElement("div")
    divGrid.classList.add("divList")
    divGrid.addEventListener("mouseenter", function( event ) {   
        // highlight the mouseenter target
        event.target.style.backgroundColor = "purple";
    })
    gridContainer.appendChild(divGrid)




    }
}

function newSketch() {
    //Creates a nodelist of the elements with class of "yeet"
    let divList = document.querySelectorAll(".divList")
    let newSketchBtn = document.querySelector("#btn")

    const divArray = Array.prototype.slice.call(divList)

    newSketchBtn.addEventListener("click", function(){

        document.querySelectorAll('.divList').forEach(function(a){
            a.remove()
            })

        let gridSizeNum = window.prompt("How many squares per side would you like your grid to be?")
        let gridSizeFinal = (gridSizeNum * gridSizeNum)

        for (let j = 1; j <= gridSizeFinal; j++) {
            let divGrid = document.createElement("div")
            divGrid.classList.add("divList")
            divGrid.addEventListener("mouseenter", function( event ) {   
                // highlight the mouseenter target
                event.target.style.backgroundColor = "purple";
            })
            gridContainer.style.gridTemplateColumns = `repeat(${gridSizeNum}, 1fr)`
            gridContainer.style.gridTemplateRows = `repeat(${gridSizeNum}, 1fr)`
            gridContainer.appendChild(divGrid)
            }        
    })
}


genHtml();

newSketch()
