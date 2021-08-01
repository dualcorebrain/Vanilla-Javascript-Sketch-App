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

document.getElementById("range-picker-slider").addEventListener("input", rangeSlider);


let currentSliderValue;

function rangeSlider(e){
    let labelElement = document.getElementById("range-label");
    currentSliderValue = e.srcElement.value;

    labelElement.append(currentSliderValue);

    let target = document.getElementById("buttons-container");
    console.log(target);

    


}




/**MAIN GRID*/

let mainGridContainer = document.getElementById("main-grid-container");

let numberOfIndividualDivs = 16;

//For loop add individual divs
for(let i = 0; i<numberOfIndividualDivs; i++){
    let newContainerDiv = document.createElement("div");
    newContainerDiv.setAttribute("class", "individual-divs");
    mainGridContainer.appendChild(newContainerDiv);
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
    console.log(e);
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

