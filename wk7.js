
// Global variable to demonstrate scope
let globalCounter = 0;

// Function with parameters and return value
// This function takes a number, adds to a local variable, and returns a result
function incrementCounter(incrementBy) {
    // Local scope variable
    let localIncrement = incrementBy * 2;
    
    // Modify global variable to show global scope access
    globalCounter += localIncrement;
    
    return globalCounter;
}

// Reusable function to log results, demonstrating function reuse
function logFunctionDemo(value) {
    console.log(`Current global counter after increment: ${value}`);
    console.log('This shows local vs global: local vars are private, global can be modified.');
}

// Event listener for Part 2 demo button
document.getElementById('function-demo').addEventListener('click', () => {
    // Call function with parameter
    const result = incrementCounter(1); // Pass parameter, get return value
    
    // Reuse log function
    logFunctionDemo(result);
    
    // Demonstrate scope: try to access local var (will be undefined)
    console.log('Attempt to access localIncrement outside function:', typeof localIncrement); // undefined
});

// Part 3: Combining CSS Animations with JavaScript

// Reusable function to trigger animation
// Takes element ID and class to add/remove as parameters, returns success message
function triggerAnimation(elementId, className) {
    const element = document.getElementById(elementId);
    
    if (element) {
        // Toggle class to trigger CSS animation
        element.classList.toggle(className);
        
        return `Animation toggled for ${elementId}`;
    }
    
    return 'Element not found';
}

// Event listener for animation trigger button
document.getElementById('trigger-animation').addEventListener('click', () => {
    const message = triggerAnimation('animated-box', 'active');
    
    console.log(message); // Log return value
});