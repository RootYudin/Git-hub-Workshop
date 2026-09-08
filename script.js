// Grab elements from the HTML
const button = document.getElementById('action-btn');
const heading = document.getElementById('main-heading');

// Add a click event listener to the button
button.addEventListener('click', () => {
    // Change the text content
    heading.textContent = "Welcome, Yudin!";
    
    // Change the text color randomly
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    heading.style.color = randomColor;
});
