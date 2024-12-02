function calculateNetSalary(basicSalary, benefits) {
    // Constants and rates
    const kraTaxBrackets = [
        { upperLimit: 24000, rate: 0.1 },
        { upperLimit: 32333, rate: 0.25 },
        { upperLimit: Infinity, rate: 0.3 },
    ];
    const nhifRates = [
        { upperLimit: 5999, deduction: 150 },
        { upperLimit: 7999, deduction: 300 },
        { upperLimit: 11999, deduction: 400 },
        { upperLimit: 14999, deduction: 500 },
        { upperLimit: 19999, deduction: 600 },
        { upperLimit: 24999, deduction: 750 },
        { upperLimit: 29999, deduction: 850 },
        { upperLimit: 34999, deduction: 900 },
        { upperLimit: 39999, deduction: 950 },
        { upperLimit: 44999, deduction: 1000 },
        { upperLimit: 49999, deduction: 1100 },
        { upperLimit: 59999, deduction: 1200 },
        { upperLimit: 69999, deduction: 1300 },
        { upperLimit: 79999, deduction: 1400 },
        { upperLimit: 89999, deduction: 1500 },
        { upperLimit: 99999, deduction: 1600 },
        { upperLimit: Infinity, deduction: 1700 },
    ];
    const nssfRate = 0.06; // 6%

    // Gross salary
    const grossSalary = basicSalary + benefits;

    // Calculate PAYE (Tax)
    let taxableIncome = grossSalary;
    let payee = 0;

    for (const bracket of kraTaxBrackets) {
        if (taxableIncome > bracket.upperLimit) {
            payee += bracket.upperLimit * bracket.rate;
            taxableIncome -= bracket.upperLimit;
        } else {
            payee += taxableIncome * bracket.rate;
            break;
        }
    }

    // Calculate NHIF Deduction
    let nhifDeduction = 0;
    for (const nhifBracket of nhifRates) {
        if (grossSalary <= nhifBracket.upperLimit) {
            nhifDeduction = nhifBracket.deduction;
            break;
        }
    }

    // Calculate NSSF Deduction
    const nssfDeduction = grossSalary * nssfRate;

    // Calculate Net Salary
    const netSalary = grossSalary - (payee + nhifDeduction + nssfDeduction);

    // Return the results
    return {
        grossSalary: grossSalary.toFixed(2),
        payee: payee.toFixed(2),
        nhifDeduction: nhifDeduction.toFixed(2),
        nssfDeduction: nssfDeduction.toFixed(2),
        netSalary: netSalary.toFixed(2),
    };
}

// Example usage
const basicSalary = 50000; // Example basic salary
const benefits = 10000; // Example benefits

const salaryDetails = calculateNetSalary(basicSalary, benefits);

console.log("Gross Salary:", salaryDetails.grossSalary);
console.log("PAYE (Tax):", salaryDetails.payee);
console.log("NHIF Deduction:", salaryDetails.nhifDeduction);
console.log("NSSF Deduction:", salaryDetails.nssfDeduction);
console.log("Net Salary:", salaryDetails.netSalary);
