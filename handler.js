/** GOALS
 * set up eraser which will clear one square at a time 
 * Allow user to change the numbers of grids (Slider) 
 * Set up functionality for black color
 * Color Picker
 * 
 * 
 * set up erase all button which will clear everything  🗸
 */


/**MAIN GRID*/

let mainGridContainer = document.getElementById("main-grid-container");

let numberOfIndividualDivs = 16;

//For loop add individual divs
for(let i = 0; i<numberOfIndividualDivs; i++){
    let newContainerDiv = document.createElement("div");
    newContainerDiv.setAttribute("class", "individual-divs");
    mainGridContainer.appendChild(newContainerDiv);
}


/* COLOR CHANGING OF INDIVIDUAL DIVS IN THE CONTAINER */
let getIndividualDivs = document.getElementsByClassName("individual-divs");


for(i= 0; i<numberOfIndividualDivs; i++){
    //adds event listener to every elements of class "individual-divs"
    getIndividualDivs[i].addEventListener("mouseenter", setColor);
}


function setColor(e){
    //sets color to an individual div where the mouse entered
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    e.toElement.style.background=`#${randomColor}`;
    console.log(e);
}


/* 'BLACK' BUTTON PRESSED */
document.getElementById("black-button").addEventListener("click", setBlackColor);

function setBlackColor(e){
    for(i= 0; i<numberOfIndividualDivs; i++){
        getIndividualDivs[i].addEventListener("mouseenter", function(e){
            e.toElement.style.background="black";
        });
    }
}



/*ERASE ALL BUTTON*/
document.getElementById("erase-all-button").addEventListener("click", eraseAll);

function eraseAll(e){
    for(let i=0; i<getIndividualDivs.length ; i++){
        getIndividualDivs[i].style.background = "white";
    }
}
