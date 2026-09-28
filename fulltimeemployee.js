import { Employee } from "./employee.js";
export class FullTimeEmployee extends Employee {
    salary;
    bonus;
    overtimeHours;
    constructor(ssn, lastName, firstName, address, rank, age, salary, bonus, overtimeHour) {
        super(ssn, lastName, firstName, address, rank, age);
        this.salary = salary;
        this.bonus = bonus;
        this.overtimeHours = overtimeHour;
    }
    // Calculates base salary, bonus, and tiered overtime pay
    calculateSalary() {
        const hourlyRate = this.salary / 40;
        let overtimePay = 0;
        if (this.overtimeHours > 0) {
            if (this.overtimeHours <= 10) {
                overtimePay = this.overtimeHours * (hourlyRate * 1.25);
            }
            else if (this.overtimeHours <= 20) {
                overtimePay = this.overtimeHours * (hourlyRate * 1.5);
            }
            else if (this.overtimeHours <= 30) {
                overtimePay = this.overtimeHours * (hourlyRate * 1.75);
            }
            else {
                overtimePay = this.overtimeHours * (hourlyRate * 2.0);
            }
        }
        return this.salary + this.bonus + overtimePay;
    }
    // Formats and returns full-time employee information
    displayInformation() {
        let info = "";
        info += "Name: " + this.firstName + " " + this.lastName + "\n";
        info += "Age: " + this.age + "\n";
        info += "Address: " + this.address + "\n";
        info += "Rank: " + this.rank + "\n";
        info += "SSN: " + this.ssn + "\n";
        info += "Base salary: " + this.salary.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) + "\n";
        info += "Overtime hours: " + this.overtimeHours + "\n";
        info += "Bonus: " + this.bonus.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) + "\n";
        info += "Total compensation: " + this.calculateCompensation().toLocaleString('en-US', { style: 'currency', currency: 'USD' }) + "\n";
        return info;
    }
    // Implements IEmployee method to return total compensation
    calculateCompensation() {
        return this.calculateSalary();
    }
    // Validates data and outputs employee details or failure message
    saveEmployee() {
        const isAgeValid = this.validateAge();
        const isRankValid = this.validateRank();
        const isSSNValid = this.validateSSN();
        if (isAgeValid && isRankValid && isSSNValid) {
            console.log(this.displayInformation());
        }
        else {
            console.log("Save Failed");
        }
    }
}
