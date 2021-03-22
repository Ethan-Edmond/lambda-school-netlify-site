// define the function to operate your button here 
let htmlement = document.getElementById("push-me-button");
let counter = 1;
function doThisThing () {
    htmlement.innerText = "Push Me Again" + "!".repeat(counter);
    counter++;
    if (counter > 10) {
	htmlement.innerText = "Okay, I've had enough";
    }
}
