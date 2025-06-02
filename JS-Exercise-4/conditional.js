let score = 90;
let passingGrade = 60;
switch (true) {
    case score == 100:
        console.log("Perfect");
        break;
    case score >= passingGrade:
        console.log("Passed");
        break;
    case score < passingGrade:
        console.log("Failed");
        break;
    default:
        console.log("Invalid input");
}