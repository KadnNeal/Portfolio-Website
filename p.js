// Step 1: Select the div by its ID or class
var clickableDiv = document.getElementById('swe-portfolio-front');

// Step 2: Add a click event listener to the div
clickableDiv.addEventListener('click', function() {
    // Step 3: Change the location of the window to navigate to the new page
    window.location.href = 'swe-portfolio.html';
});

const homeButton = document.getElementById('homeButton');
homeButton.addEventListener('click', function(e) {
    window.location.href = 'index.html';
    return false;
})