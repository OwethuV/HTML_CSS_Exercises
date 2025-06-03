// TODO: Create a global variable called globalCount
let globalCount = 0;
// TODO: Create a function that demonstrates local scope
function createFunction() {
    let localCount = 0;
    return localCount;
}
// TODO: Create a function that tries to modify both variables
function modifyCounts() {
    globalCount += 1;
    createFunction().localCount += 1; 
    return `Global Count: ${globalCount}, Local Count: ${createFunction().localCount}`;
}

// TODO: Create a Student constructor function
function Student(fullName, age, grade) {
    this.fullName = fullName;
    this.age = age;
    this.grade = grade;
}

// TODO: Create several student instances
const student1 = new Student("John Doe", 20, "A");
const student2 = new Student("Jane Smith", 22, "B");
const student3 = new Student("Alice Johnson", 19, "C");

// TODO: Create an object literal with nested properties
const workshop = {
    title: "JavaScript Fundamentals",
    duration: 4,
    students: [student1, student2, student3],
    instructor: {
        name: "Mr. Smith",
        experience: "5 years"
    }
};