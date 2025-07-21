const clickHandler = () => {
    console.log('Button clicked!');
}

// Throttle function to limit the rate at which a function can fire
// It will execute the function immediately and then ignore further calls
// until the specified delay has passed
// This is useful for scenarios like button clicks where you want to prevent
// multiple clicks in a short period of time
const throttle = (fn, delay) => {
    let timer;
    return (...args) => {
        // If a timer is already set, ignore further clicks
        if(timer){
            return;
        }

        // If no timer is set, execute the function immediately and disable the button
        fn(...args);
        document.getElementById('btn').disabled = true;
        
        // Set a timer to prevent further execution for the specified delay
        timer = setTimeout(() => {
            timer = null; // Reset the timer after the delay
            document.getElementById('btn').disabled = false; // Re-enable button after the delay
        }, delay);
    }
};

const throttleClickHandler = throttle(clickHandler, 1000);

document.getElementById('btn')
.addEventListener('click', throttleClickHandler);