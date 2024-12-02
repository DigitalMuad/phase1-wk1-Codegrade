function gradeGenerator(marks) {
    // Validate input
    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log("Invalid marks. Please enter a value between 0 and 100.");
        return;
    }

    // Determine grade
    if (marks > 79) {
        console.log("Grade: A");
    } else if (marks >= 60) {
        console.log("Grade: B");
    } else if (marks >= 50) {
        console.log("Grade: C");
    } else if (marks >= 40) {
        console.log("Grade: D");
    } else {
        console.log("Grade: E");
    }
}
// Calling The Function
gradeGenerator();


// Example usage
gradeGenerator(85);  // Output: Grade: A
gradeGenerator(72);  // Output: Grade: B
gradeGenerator(35);  // Output: Grade: E
