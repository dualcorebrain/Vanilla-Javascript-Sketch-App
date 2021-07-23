/** GOALS
 * set up erase all button which will clear everything 
 * set up eraser which will clear one square at a time 
 * Allow user to change the numbers of grids (Slider) 
 * Color Picker
 * 
 */


/**MAIN GRID*/

let mainGridContainer = document.getElementById("main-grid-container");

let numberOfIndividualDivs = 16;

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


/*ERASE ALL BUTTON*/
document.getElementById("erase-all-button").addEventListener("click", function)
