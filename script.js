// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    // Get the necessary elements
    var btn = document.getElementById("btn");
    var frogContainer = document.getElementById("frog-container");
    var points = document.getElementById("points");
    var mouseEnterCount = 0;
    var startTime;
    var currentTime;

    // Add click event listener to the button
    btn.addEventListener("click", function() {
        frogContainer.style.display = "block";
        mouseEnterCount = 0;
        points.textContent = "Your Points: " + mouseEnterCount;

        frogContainer.addEventListener("click", function() {
            mouseEnterCount++;
            points.textContent = "Your Points: " + mouseEnterCount;
        });

        function generateRandomValues() {
            var randomX = Math.floor(Math.random() * window.innerWidth) + "px";
            var randomY = Math.floor(Math.random() * window.innerHeight) + "px";
            frogContainer.style.left = randomX;
            frogContainer.style.top = randomY;
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

        // Set the game duration (in milliseconds)
        var gameDuration = 10000; // 10 seconds

        // Start the timer
        startTime = Date.now();
        setTimeout(function() {
            // Timer callback function
            frogContainer.classList.add("paused");
            if (mouseEnterCount >= 20) {
                points.innerHTML = points.textContent + "<br>&nbsp;&nbsp;&nbsp;You Won";
            } else {
                points.innerHTML = points.textContent + "<br>&nbsp;&nbsp;&nbsp;You Lost";
            }
            frogContainer.style.display = "none";
        }, gameDuration);
        
    });

    points.textContent = "Your Points: " + mouseEnterCount;

});
