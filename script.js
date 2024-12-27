//Create an array of images
var imageArray = ["images/Coyote.jpg", "images/Deer.jpg", "images/Squirrel.jpg"];
//Save total size of array to variable arraySize
var arraySize = imageArray.length;
//Set wait time between slides in milliseconds
setInterval(runit, 3000);

var x = 1; //Used to count up to arraySize

//Function runit play slideshow when called
function runit() {
    //Set image to next picture in image array
    document.getElementById("slideshow").src = imageArray[x];

    //Increase count by 1
    x++;

    //If count has reached the last index of imageArray than set count back to starting index.
    if (x === arraySize) {
        x = 0;
    }
}

function change(id,img) 
{
    document.getElementById(id).src=img;
}

// for feedback page
function validateForm()
{
"use strict";
var isvalid=true;
   if(document.getElementById("visitor").value == '')
    {
        document.getElementById("visitor").style.borderColor="red";
        document.getElementById("visitor").style.backgroundColor = 'pink';
        isvalid=false;
    }
   else
    {
        document.getElementById("visitor").style = null;
        // hides the feedback form and displays thank you image when form is submitted
        document.querySelector(".feedback").style.display = "none";
        document.getElementById("thankYou").style.display = "block";
    }

  console.log("Is name ok? "+isvalid);
    
  return (isvalid); 
}//end of javascript function validateForm