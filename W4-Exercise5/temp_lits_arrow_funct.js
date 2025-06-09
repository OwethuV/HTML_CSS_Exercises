// TODO: Create a multiline string using template literals 
let string = `
This is a multiline string.
It has multiple lines.
Or is it just one line?
Stay tuned to find out.`
// TODO: Create a function that uses template literals for HTML generation 
function HTML(name, description) {
    return `
    <div class="card">
      <h2>${name}</h2>
      <p>${description}</p>
    </div>
  `
}
// TODO: Convert regular functions to arrow functions 
const html = (name, description) => (<div class="card">
    <h2>${name}</h2>
    <p>${description}</p>
</div>); //converting the function above

//another function below (contains arrow function):
function getTotal(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

//converted to arrow function:
total = numbers => numbers.reduce((sum, num) => sum + num, 0);

// TODO: Use arrow functions with array methods
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(n => n * 2); 

const even = numbers.filter(n => n % 2 === 0);

const total = numbers.reduce((sum, n) => sum + n, 0);
