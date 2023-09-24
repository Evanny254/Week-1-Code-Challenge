// Variables declarations
const basicSalary = 50000; //Example Basic salary
const benefits = 5000;  // Example benefits
const grossSalary = basicSalary + benefits ;
// Deducting NHIF from the gross salary
const netSalary = function () {
    const afterNhifDeductions = function () {
        if (grossSalary >= 0 && grossSalary <= 5999) { return (grossSalary - 150);}
        else if (grossSalary >= 6000 && grossSalary <= 7999) {return (grossSalary - 300);}
        else if (grossSalary >= 8000 && grossSalary <= 11999) {return (grossSalary - 400);}
        else if (grossSalary >= 12000 && grossSalary <= 14999) {return (grossSalary - 500);}
        else if (grossSalary >= 15000 && grossSalary <= 19999) {return (grossSalary - 600);}
        else if (grossSalary >= 20000 && grossSalary <= 24999) {return (grossSalary - 750);}
        else if (grossSalary >= 25000 && grossSalary <= 29999) {return (grossSalary - 850);}
        else if (grossSalary >= 30000 && grossSalary <= 34999) {return (grossSalary - 900); }
        else if (grossSalary >= 35000 && grossSalary <= 39999) {return (grossSalary - 950);}
        else if (grossSalary >= 40000 && grossSalary <= 44999) {return (grossSalary - 1000);}
        else if (grossSalary >= 45000 && grossSalary <= 49999) {return (grossSalary - 1100);}
        else if (grossSalary >= 50000 && grossSalary <= 59999) {return (grossSalary - 1200);}
        else if (grossSalary >= 60000 && grossSalary <= 69999) {return (grossSalary - 1300);}
        else if (grossSalary >= 70000 && grossSalary <= 79999) {return (grossSalary - 1400);}
        else if (grossSalary >= 80000 && grossSalary <= 89999) {return (grossSalary - 1500);}
        else if (grossSalary >= 90000 && grossSalary <= 99999) {return (grossSalary - 1600);}
        else if (grossSalary >= 100000) {return (grossSalary - 1700);}
    }
// Calculating Payee deductions
    const payeeDeductions= function () {
            if (grossSalary >=1 && grossSalary <= 24000) { return grossSalary * 0.1} 
            else if (grossSalary >= 24001 && grossSalary <= 32333) { return grossSalary * 0.25}
            else if (grossSalary >= 32334 && grossSalary <= 500000) { return grossSalary * 0.30}
            else if (grossSalary >= 500001 && grossSalary <= 800000) { return grossSalary * 0.325}
            else if (grossSalary > 800000) { return grossSalary * 0.35}
    }
// Calculating NSSF deductions
    const nssfDeductions = grossSalary * 0.06;
// Returning the net income from above deductions
    return (afterNhifDeductions() - (payeeDeductions() + nssfDeductions));
    
}
console.log('Net Salary:', netSalary);