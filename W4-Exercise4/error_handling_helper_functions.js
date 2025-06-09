function validateInput(input) {
    try {
        if (!input || input.trim() === "") {
            throw new Error("Input cannot be empty");
        } else if (!isNaN(input)) {
            throw new Error("Please input a string, not a number");
        } else {
            console.log(`User input: ${input}`);
        }
    } catch (error) {
        console.error(error.message);
    }
}

let input = window.prompt("Input anything but a number");
validateInput(input);

// TODO: Create a function that demonstrates multiple error types
function triggerErrors(value) {
    try {
        let notAFunction = 42;
        notAFunction();

        console.log(undefinedVariable);

        if (typeof value !== "string") {
            throw new Error("Expected a string");
        }

        sum = notafunction++;

    } catch (error) {
        console.error(`${error.name}: ${error.message}`);
    }
}

// TODO: Create a collection of helper functions for string manipulation 

function getInitials(str) {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase())
    .join("");
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

function capitalizeFirst(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getInitials(str) {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase())
    .join("");
}

// TODO: Create helper functions for array operations
function getMax(numbers) {
    return Math.max(...numbers);
}

function getMin(numbers) {
    return Math.min(...numbers);
}

function getAverage(numbers) {
    if (numbers.length === 0) {
        return 0
    } else {
        return getTotal(numbers) / numbers.length;
    }
}

function getTotal(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}
