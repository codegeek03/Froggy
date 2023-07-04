

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    // Get the necessary elements
    var frogContainer = document.getElementById("frog-container");
    var points = document.getElementById("points");
    var clickCount = 0;
  
    // Add click event listener to frogContainer
// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    // Get the necessary elements
    var frogContainer = document.getElementById("frog-container");
    var points = document.getElementById("points");
    var clickCount = 0;
  
    frogContainer.addEventListener("click", function() {
      clickCount++;
      points.textContent = "Clicks: " + clickCount;
  
      var currentTime = Date.now();
      if (clickCount < 10 && currentTime < startTime + 20000) {
        points.textContent = "You Failed";
      } else {
        points.textContent = "Success";
      }
    });
  
    var startTime = Date.now();
  
  });
  
  });

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    // Get the necessary elements
    var frogContainer = document.getElementById("frog-container");
  
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
  
  

//   var X=[];
//   var Y=[];
//   function genX(){
//       for(i=0;i<1000;i++){
//           X.push(i)
//       }
//   }
//   function genY(){
//       for(i=0;i<600;i++){
//           Y.push(i)
//       }
//   }
//   genX();
//   genY();
  
//   function getX() {
//       var randomIndex = Math.floor(Math.random() * numbers.length);
//       var randomNumber = X[randomIndex];
//       return randomNumber;
//     }
    
//     var randomX = getX();
  
//     function getY() {
//       var randomIndex = Math.floor(Math.random() * numbers.length);
//       var randomNumber = Y[randomIndex];
//       return randomNumber;
//     }
    
//     var randomY = getY();
  







