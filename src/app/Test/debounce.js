const clickHandler = () => {
    console.log('Button clicked!');
}

// Debounce function to limit the rate at which a function can fire
// It will only execute the function after a specified delay
// if no new calls are made during that delay
// This is useful for scenarios like search input where you want to wait
// for the user to stop typing before making a request
// Debounce will always honor the last call made within the delay period
const debounce = (fn, delay) => {
    let timer;
    // Return a function that will be called on each click
    return (...args) => {
        // Clear the previous timer if it exists
        if(timer){
            clearTimeout(timer);
        }

        // Set a new timer to execute the function after the delay
        // This will ensure that the function is only called once
        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    }
};

const debounceClickHandler = debounce(clickHandler, 1000);

document.getElementById('btn')
.addEventListener('click', debounceClickHandler);