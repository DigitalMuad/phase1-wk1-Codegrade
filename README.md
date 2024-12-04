   ## CHALLENGE 1

StudentGradeGenerator.js
## Introduction
StudentGradeGenerator.js is a JavaScript program designed to help determine a student's grade based on their numerical score. The program uses a standard grading scale, validates inputs, and outputs either the grade or an error message for invalid scores.

## Features
Validates Input: Ensures the input is a number between 0 and 100.
Grading Scale: Assigns grades based on the following thresholds:
A: Marks greater than 79.
B: Marks between 60 and 79 (inclusive).
C: Marks between 50 and 59 (inclusive).
D: Marks between 40 and 49 (inclusive).
E: Marks below 40.
Error Handling: Returns an error message if the input is invalid.

## Functionality
### gradeGenerator(marks)
This is the core function of the program. It performs the following tasks:

Input Validation:

Checks if marks is:
A number (isNaN()).
Between 0 and 100.
If invalid, it outputs:

javascript code
console.log("Invalid marks. Please enter a value between 0 and 100.");
Grade Determination: Based on the validated marks, the function checks the following conditions:

If marks > 79: Outputs Grade: A.
If marks >= 60: Outputs Grade: B.
If marks >= 50: Outputs Grade: C.
If marks >= 40: Outputs Grade: D.
Otherwise: Outputs Grade: E.
Grade Output: The grade is displayed using:

javascript code
console.log("Grade: [A/B/C/D/E]");
## Grading Scale
Marks Range	Grade
80–100	A
60–79	B
50–59	C
40–49	D
Below 40	E
## Usage Examples
Valid Inputs:

javascript code
gradeGenerator(85); // Output: Grade: A
gradeGenerator(72); // Output: Grade: B
gradeGenerator(35); // Output: Grade: E
Invalid Inputs:

javascript code
gradeGenerator(150);  // Output: Invalid marks. Please enter a value between 0 and 100.
gradeGenerator(-10);  // Output: Invalid marks. Please enter a value between 0 and 100.
gradeGenerator("abc"); // Output: Invalid marks. Please enter a value between 0 and 100.
Calling Without Arguments: If the function is called without arguments:

javascript code
gradeGenerator(); // Output: Invalid marks. Please enter a value between 0 and 100.

## How to Run
### Using Node.js
Save the code to a file named StudentGradeGenerator.js.
Run the program in the terminal:

node StudentGradeGenerator.js

### Using Browser Console
Open the developer tools in your browser (press F12 or right-click > Inspect).
Go to the Console tab.
Paste the code and press Enter.

## Future Enhancements
Interactive Inputs: Use prompt() for browser input or CLI arguments for Node.js.
Batch Grading: Extend the functionality to process multiple scores at once.
Custom Grading Scales: Allow users to define their own grading criteria.

   ##  CHALLENGE TWO
SpeedDetector.js
## Introduction
SpeedDetector.js is a JavaScript program designed to monitor vehicle speeds and determine whether a driver is within the speed limit, has accumulated demerit points, or should have their license suspended. This program uses a point-based system to encourage safe driving practices.

## Features
Speed Monitoring:

Checks if the speed is within the allowed limit.
Outputs "Ok" if the speed is legal.
Point Calculation:

For every 5 km/h over the speed limit, the driver earns 1 point.
If the driver's speed results in more than 12 points, their license is suspended.
Error Handling:

Validates input to ensure it is a non-negative number.

## Functionality
### carSpeedDetector(speed)
This is the main function that performs the following tasks:

Input Validation:

Ensures the speed is:
A valid number (!isNaN()).
Greater than or equal to 0.
If the input is invalid, it outputs:

javascript

console.log("Invalid input");
Speed Limit Check:

If the speed is less than or equal to 70 km/h, it outputs:
javascript
console.log("Ok");
Point Calculation:

For speeds greater than 70 km/h, it calculates demerit points using:

javascript
const points = Math.floor((speed - speedLimit) / kmPerPoint);
If points are 12 or fewer, it outputs the total points:

javascript

console.log(`Points: ${points}`);
If points exceed 12, it suspends the license:

javascript

console.log("License suspended");

## Constants
Speed Limit: 70 km/h
Demerit Point Interval: 5 km/h
Maximum Points Before Suspension: 12 points

## Usage Examples
Speed Within Limit:

javascript

carSpeedDetector(65); // Output: Ok
carSpeedDetector(70); // Output: Ok
Speed Over Limit with Points:

javascript

carSpeedDetector(85); // Output: Points: 3
carSpeedDetector(100); // Output: Points: 6
License Suspension:

javascript

carSpeedDetector(150); // Output: License suspended
Invalid Input:

javascript

carSpeedDetector(-10);  // Output: Invalid input
carSpeedDetector("fast"); // Output: Invalid input

## How to Run
### Using Node.js
Save the code to a file named SpeedDetector.js.
Run the program in the terminal:
bash

node SpeedDetector.js


   ## CHALLENGE THREE
NetSalaryCalculator.js
## Introduction
NetSalaryCalculator.js is a JavaScript program designed to calculate the net salary of an employee based on their basic salary and benefits. The program accounts for deductions such as:

PAYE (Tax): Based on KRA tax brackets.
NHIF (National Hospital Insurance Fund): Based on NHIF deduction rates.
NSSF (National Social Security Fund): Calculated as a percentage of the gross salary.
This ensures an accurate breakdown of gross salary, deductions, and the resulting net salary.

## Features
Gross Salary Calculation:

Combines basic salary and benefits to determine the total gross income.
PAYE (Tax) Deduction:

Uses progressive KRA tax brackets to calculate income tax.
NHIF Deduction:

Deductions are based on the NHIF bracket rates for the gross salary.
NSSF Deduction:

Deductions are calculated as 6% of the gross salary.
Net Salary Calculation:

Determines the final take-home pay by subtracting all deductions from the gross salary.
## Functionality
### calculateNetSalary(basicSalary, benefits)
This function calculates and returns the following salary components:

Gross Salary:

Sum of basic salary and benefits:
javascript

const grossSalary = basicSalary + benefits;
PAYE (Tax):

Uses KRA tax brackets to compute tax:
javascript

const kraTaxBrackets = [
    { upperLimit: 24000, rate: 0.1 },
    { upperLimit: 32333, rate: 0.25 },
    { upperLimit: Infinity, rate: 0.3 },
];
NHIF Deduction:

Deductions are based on NHIF brackets:
javascript

const nhifRates = [
    { upperLimit: 5999, deduction: 150 },
    { upperLimit: 7999, deduction: 300 },
    // Additional brackets...
];
NSSF Deduction:

A flat rate of 6% of the gross salary:
javascript

const nssfRate = 0.06;
const nssfDeduction = grossSalary * nssfRate;
Net Salary:

Calculated by subtracting PAYE, NHIF, and NSSF deductions from the gross salary:
javascript

const netSalary = grossSalary - (payee + nhifDeduction + nssfDeduction);
Result:

Returns an object containing all components:
javascript

return {
    grossSalary,
    payee,
    nhifDeduction,
    nssfDeduction,
    netSalary,
};
## Usage Examples
Example 1: Basic Salary of 50,000 and Benefits of 10,000
javascript

const basicSalary = 50000;
const benefits = 10000;

const salaryDetails = calculateNetSalary(basicSalary, benefits);

console.log("Gross Salary:", salaryDetails.grossSalary);  // Output: 60000.00
console.log("PAYE (Tax):", salaryDetails.payee);          // Output: PAYE Deduction
console.log("NHIF Deduction:", salaryDetails.nhifDeduction); // Output: NHIF Deduction
console.log("NSSF Deduction:", salaryDetails.nssfDeduction); // Output: NSSF Deduction
console.log("Net Salary:", salaryDetails.netSalary);       // Output: Final Net Salary
Example 2: Input Validation
Ensure the function receives valid numbers for basic salary and benefits.
## Constants and Configurations
KRA Tax Brackets:

Progressive tax rates:
10% for income ≤ 24,000
25% for income > 24,000 but ≤ 32,333
30% for income > 32,333
NHIF Brackets:

Fixed deductions based on gross salary.
NSSF Rate:

A fixed rate of 6% of the gross salary.
## How to Run
### Using Node.js
Save the code to a file named NetSalaryCalculator.js.
Run the program in the terminal:


node NetSalaryCalculator.js


## Author
Muad Shafii Mahdi - 2024