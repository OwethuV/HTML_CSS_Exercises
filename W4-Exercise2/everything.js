// TODO: Create a function called sum. The function will take in a parameter andcalculate all the numbers from 0 -> the parameter. You must check if the parameterisan integer first before any calculation is made. If the parameter is not a number, return a message stating, “The value passed is not a number”. You are NOT allowedtouse methods(!Number.isInteger(n)) or regular expressions(.match(/cat/g)). Makesureto test your code effectively.
function sum(number) {
    try {
        if (typeof number !== 'number') {
            throw new Error("The value passed is not a number");
        }
        let total = 0;
        for (let i = 0; i <= number; i++) {
            total += i;
        }
        return `The sum of all numbers from 0 to ${number} is ${total}`;
    } catch (error) {
        return error.message;
    }
}

// TODO: Create a function called ‘factorial’ that takes in a number as a parameter. The function will print the factorial of the entered number, e.g. factorial(4) ->4*3*2*1 //output 24
function factorial(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return `The factorial of ${number} is ${result}`;
}
// TODO: Create a function called funkyMath . If this function is calledwith2arguments the function will subtract the first from the second. If the functionis calledwith 3 arguments it will add all 3 numbers together. If the function is calledwith4arguments it will add together argument 1 and 2 , 3 and 4 separately. Thendividethem accordingly, eg funkyMath(8,2,3,5) -> 8+2 divided by 3+5 -> 10/8 //output 1,25
function funkyMath(...args) {
    if (args.length === 2) {
        return args[1] - args[0];
    } else if (args.length === 3) {
        return args[0] + args[1] + args[2];
    } else if (args.length === 4) {
        const sum1 = args[0] + args[1];
        const sum2 = args[2] + args[3];
        return sum1 / sum2;
    } else {
        throw new Error("Invalid number of arguments");
    }
}
// TODO: Create a loop that will remove all the odd numbers fromthe array andaddthem to a new array. Use the current array [1, 2 , 33, 45, 6,44]. Bonus: Make sure to arrange them from smallest to biggest.()
const numbers = [1, 2, 6, 33, 44, 45];
const oddNumbers = [];
for (let number of numbers) {
    if (! number % 2 === 0) {
        oddNumbers.push(number);
        numbers.splice(numbers.indexOf(number), 1);
    }
};

// TODO: Create an object called ‘me’ with properties of first name, last name, age, favourite colour, dream car
let me = {
    firstName: "Owethu",
    lastName: "Valantiya",
    age: 20,
    favouriteColour: "Blue",
    dreamCar: "Mercededes-Benz AVTR",
};

// TODO: Create and add a new property and value of ‘favourite food’ to the object. 
me.favouriteFood = "Pizza";

// TODO: . Now delete the age property from the object.
delete me.age;