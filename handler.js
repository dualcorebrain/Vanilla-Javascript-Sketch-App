/** GOALS
 * set up eraser which will clear one square at a time  🗸
 * Allow user to change the numbers of grids (Slider) 🗸
 * Set up functionality for black color 🗸
 * Add Fullscreen button
 * Color Picker 🗸
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

/**MAIN GRID DEFAULT INITIAL BEHAVIOUR UPON LOAD*/

let mainGridContainer = document.getElementById("main-grid-container");

let width = 15;

let numberOfIndividualDivs = width**2;

mainGridContainer.style.cssText = `grid-template-columns: repeat(${width}, 1fr);`;
//mainGridContainer.style.cssText = `grid-template-rows: repeat(${width}, 1fr);`;


//For loop adds individual divs to the main-grid-container
for(let i = 0; i<numberOfIndividualDivs; i++){
    let newContainerDiv = document.createElement("div");
    newContainerDiv.setAttribute("class", "individual-divs");
    mainGridContainer.appendChild(newContainerDiv);
}





/**RANGE SLIDER */
// On Input continuously updates while slider is moving, ideal for changing the slider value
// On Change continuously only triggers the event after value is changed 
document.getElementById("range-picker-slider").addEventListener("input", rangeSliderValue);
document.getElementById("range-picker-slider").addEventListener("change", customDivsRemover);


let currentSliderValue;

function rangeSliderValue(e){
    //CHANGES DISPLAYED NUMBER ABOVE THE RANGE SLIDER
    let labelElement = document.createElement("label"); //create a new label element
    currentSliderValue = e.srcElement.value;        //Current SLider value
    let newText = document.createTextNode(currentSliderValue + " x " + currentSliderValue); //a new text node

    labelElement.append(newText);


    let targetHTMLParentElement = document.getElementById("buttons-container"); 
    let oldLabelTarget = targetHTMLParentElement.children[5];    //targets the <label> child already placed in HTML 
    
    targetHTMLParentElement.replaceChild(labelElement, oldLabelTarget); //replaces the values
}

function customDivsRemover(){
    //For loop REMOVES individual divs in the main-grid-container

    currentNumberOfDivs = document.getElementById("main-grid-container").childElementCount;

    if(document.getElementById("main-grid-container").hasChildNodes){
    for(let i = 0; i<currentNumberOfDivs; i++){
        let divsToRemove = mainGridContainer.children[0];
        mainGridContainer.removeChild(divsToRemove);
        }
    }

    customDivsAdder();

}

function customDivsAdder(){
    //This For loop now Adds 'user specified' number of grids to the main-grid-container
    let newNumberofDivsToAdd = currentSliderValue**2;


    for(let i = 0; i<newNumberofDivsToAdd; i++){
        let newContainerDiv = document.createElement("div");
        newContainerDiv.setAttribute("class", "individual-divs");
        mainGridContainer.appendChild(newContainerDiv);

    }

    //console.log(document.getElementById("main-grid-container").childElementCount);
    mainGridContainer.style.cssText = `grid-template-columns: repeat(${currentSliderValue}, 1fr);`;
    //mainGridContainer.style.cssText = `grid-template-rows: repeat(${currentSliderValue}, 1fr);`;


/*
    //Problematic to remove, needs modification
    if(numberOfIndividualDivs != 15){
        for(i= 0; i<(newNumberofDivsToAdd**2); i++){
            //adds event listener to every elements of class "individual-divs"
            getIndividualDivs[i].addEventListener("mouseenter", setBlackColor);
        }
    }
*/
}


/**END OF GRID WORKS */






/**BEGINNING OF COLOR WORKS */





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







/**numberOfIndividual divs variable is problematic. The reason why not all divs change on hover */









/* 'Black' BUTTON PRESSED */
document.getElementById("black-button").addEventListener("click", setBlackColorManual);

function setBlackColorManual(e){
/**
 * First check if the slider has been changed
 * > If not then currentSliderValue will be undefined. Means the page has been just loaded proceed upto numberOfIndividualDivs
 * > Else the currentSliderValue has been changed go upto currentSliderValue in this case since different ammounts of divs now
 */
    //console.log(currentSliderValue);

    let currentNumberofTotalDivs = currentSliderValue**2;       //We have to create a new variable for this within this section, because using general valued declared above may be 'undefined or outdated'

    if(currentSliderValue == undefined){{

        console.log("default ran");

        //!!!!! Both for loops rely on 'currentNumberofTotalDivs' variable. Should not one of them rely on 'numberOfIndividualDivs'? !!!!!!

        for(i= 0; i<numberOfIndividualDivs; i++){             
            getIndividualDivs[i].addEventListener("mouseenter", function(e){
                e.toElement.style.background="#000000";
            });
        }
    }

    }else{
        //console.log("undefiend ran");

        for(i= 0; i<currentNumberofTotalDivs; i++){
            getIndividualDivs[i].addEventListener("mouseenter", function(e){
                e.toElement.style.background="#000000";
            });
        }
    }

    
}

/* 'Random Color' BUTTON PRESSED */
document.getElementById("random-button").addEventListener("click", setRandomColor);

function setRandomColor(e){

    console.log(currentSliderValue + "from setRandomColor");

    let currentNumberofTotalDivs = currentSliderValue**2;

    if(currentSliderValue == undefined){

        for(i= 0; i<numberOfIndividualDivs; i++){
            getIndividualDivs[i].addEventListener("mouseenter", function(e){
                var randomColor = Math.floor(Math.random()*16777215).toString(16);
                e.toElement.style.background=`#${randomColor}`;
            });
        }

    }else{
        console.log(currentNumberofTotalDivs + "from setRandomColor else");

        for(i= 0; i<currentNumberofTotalDivs; i++){
            getIndividualDivs[i].addEventListener("mouseenter", function(e){
                var randomColor = Math.floor(Math.random()*16777215).toString(16);
                e.toElement.style.background=`#${randomColor}`;
            });
        }
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
    let currentNumberofTotalDivs = currentSliderValue**2;

    if(currentSliderValue == undefined){

        for(i= 0; i<numberOfIndividualDivs; i++){
            getIndividualDivs[i].addEventListener("mouseenter", function(e){
                e.toElement.style.background="#ffffff";
            });
        }

    }else{
        for(i= 0; i<currentNumberofTotalDivs; i++){
            getIndividualDivs[i].addEventListener("mouseenter", function(e){
                e.toElement.style.background="#ffffff";
            });
        }
    }
}


/* COLOR PICKER */
document.getElementById("color-picker").addEventListener("input", colorPicker);

function colorPicker(e){
    let currentNumberofTotalDivs = currentSliderValue**2;


    let colorElementpath = document.getElementById("color-picker");
    let currentCustomColorSelected = colorElementpath.value;


    if(currentSliderValue == undefined){{

        for(i= 0; i<numberOfIndividualDivs; i++){
            getIndividualDivs[i].addEventListener("mouseenter", function(e){
                e.toElement.style.background=`${currentCustomColorSelected}`;
            });
        }

    }

    }else{

        for(i= 0; i<currentNumberofTotalDivs; i++){
            getIndividualDivs[i].addEventListener("mouseenter", function(e){
                e.toElement.style.background=`${currentCustomColorSelected}`;
            });
        }

    }
}
