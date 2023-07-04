// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    
// Get the necessary elements
var btn = document.getElementById("btn");

var mouseEnterCount = 0;

// Add click event listener to the button
btn.addEventListener("click", function() {
    // Get the necessary elements
    
    var frogContainer = document.getElementById("frog-container");
    var points = document.getElementById("points");

    var startTime;
    var lastX = 0;
    var lastY = 0;

    frogContainer.style.display="block";

    frogContainer.addEventListener("click", function() {
        mouseEnterCount++;
        points.textContent = "Your Points: " + mouseEnterCount;
        var currentTime = Date.now();
    });

    function generateRandomValues() {
        var randomX = Math.floor(Math.random() * window.innerWidth) + "px";
        var randomY = Math.floor(Math.random() * window.innerHeight) + "px";
        frogContainer.style.left = lastX;
        frogContainer.style.top = lastY;
        lastX = randomX;
        lastY = randomY;
    }

    frogContainer.addEventListener("animationiteration", function() {
        generateRandomValues();
    });

    // Function to generate random values for animation
    function generateRandomValues() {
        var randomX = Math.floor(Math.random() * window.innerWidth) + "px";
        var randomY = Math.floor(Math.random() * window.innerHeight) + "px";
        frogContainer.style.setProperty("--randomX", randomX);
        frogContainer.style.setProperty("--randomY", randomY);
    }

    // Trigger the function on animation iteration
    frogContainer.addEventListener("animationiteration", generateRandomValues);

    // Generate random values for the initial animation
    generateRandomValues();
});

    var frogContainer = document.getElementById("frog-container");
    var points = document.getElementById("points");
 

    points.textContent = "Your Points: " + mouseEnterCount + currentTime+startTime;
    
});

if(mouseEnterCount<10 && currentTime==startTime+10000)
{
    points.textContent=points.textContent+"You failed!"
}