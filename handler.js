/** GOALS
 * set up eraser which will clear one square at a time  🗸
 * Allow user to change the numbers of grids (Slider) 
 * Set up functionality for black color 🗸
 * Color Picker
 * 
 * 
 * set up erase all button which will clear everything  🗸
 */

/*RANGE PICKER*/

/*ALTERNATIVE METHOD OF RANGE PICKER */
/*var slider = document.getElementById("range-picker-slider");

slider.oninput = function(e) {
    //console.log(slider.value);

    let labelElement = document.getElementById("range-label");
    console.log(labelElement);
}
*/


//The problem may lie with the fact that with squared numbers, for loops for adding individual divs justs adds the sequentially

/**MAIN GRID DEFAULT BEHAVIOUR UPON LOAD*/

let mainGridContainer = document.getElementById("main-grid-container");

let width = 8;

let numberOfIndividualDivs = width**2;

mainGridContainer.style.cssText = `grid-template-columns: repeat(${width}, 1fr);`;

//For loop adds individual divs to the main-grid-container
for(let i = 0; i<numberOfIndividualDivs; i++){
    let newContainerDiv = document.createElement("div");
    newContainerDiv.setAttribute("class", "individual-divs");
    mainGridContainer.appendChild(newContainerDiv);
}


/**RANGE SLIDER */
document.getElementById("range-picker-slider").addEventListener("input", rangeSlider);


let currentSliderValue;

function rangeSlider(e){
    //DOES NOT WORK

    //CHANGES DISPLAYED NUMBER ABOVE THE RANGE SLIDER
    let labelElement = document.createElement("label"); //create a new label element
    currentSliderValue = e.srcElement.value;        //Current SLider value
    let newText = document.createTextNode(currentSliderValue + " x " + currentSliderValue); //a new text node

    labelElement.append(newText);


    let targetHTMLParentElement = document.getElementById("buttons-container"); 
    let oldLabelTarget = targetHTMLParentElement.children[5];    //targets the <label> child already placed in HTML 
    
    targetHTMLParentElement.replaceChild(labelElement, oldLabelTarget); //replaces the values

    customDivsAppender(currentSliderValue);

}

function customDivsAppender(currentSliderValue){
    //For loop REMOVES individual divs in the main-grid-container
    for(let i = 0; i<numberOfIndividualDivs; i++){
        let divsToRemove = mainGridContainer.children[0];
        mainGridContainer.removeChild(divsToRemove);

    }

    console.log(currentSliderValue);

    //This For loop now Adds 'user specified' number of grids to the main-grid-container
    for(let i = 0; i<currentSliderValue; i++){
        let newContainerDiv = document.createElement("div");
        newContainerDiv.setAttribute("class", "individual-divs");
        mainGridContainer.appendChild(newContainerDiv);

    }

}



/* DEFAULT HOVER BLACK COLOR */
let getIndividualDivs = document.getElementsByClassName("individual-divs");


for(i= 0; i<numberOfIndividualDivs; i++){
    //adds event listener to every elements of class "individual-divs"
    getIndividualDivs[i].addEventListener("mouseenter", setBlackColor);
}


function setBlackColor(e){
    //sets color to an individual div where the mouse entered
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    e.toElement.style.background="#000000";
}


/* 'Black' BUTTON PRESSED */
document.getElementById("black-button").addEventListener("click", setBlackColorManual);

function setBlackColorManual(e){
    for(i= 0; i<numberOfIndividualDivs; i++){
        getIndividualDivs[i].addEventListener("mouseenter", function(e){
            e.toElement.style.background="#000000";
        });
    }

}


/* 'Random Color' BUTTON PRESSED */
document.getElementById("random-button").addEventListener("click", setRandomColor);

function setRandomColor(e){
    for(i= 0; i<numberOfIndividualDivs; i++){
        getIndividualDivs[i].addEventListener("mouseenter", function(e){
            var randomColor = Math.floor(Math.random()*16777215).toString(16);
            e.toElement.style.background=`#${randomColor}`;
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


/*ERASE SINGLE BUTTON*/
document.getElementById("erase-single-button").addEventListener("click", eraser);

function eraser(e){
    for(i= 0; i<numberOfIndividualDivs; i++){
        getIndividualDivs[i].addEventListener("mouseenter", function(e){
            e.toElement.style.background="#ffffff";
        });
    }
}

