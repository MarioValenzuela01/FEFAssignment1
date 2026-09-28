import { Employee } from "./employee.js";
export class ContractEmployee extends Employee {
    hours;
    hourlyRate;
    constructor(ssn, lastName, firstName, address, rank, age, hours, hourlyRate) {
        super(ssn, lastName, firstName, address, rank, age);
        this.hours = hours;
        this.hourlyRate = hourlyRate;
    }
    // Calculates compensation (regular pay + 1.5x overtime for hours over 40)
    calculateCompensation() {
        if (this.hours <= 40) {
            return this.hours * this.hourlyRate;
        }
        else {
            const regularPay = 40 * this.hourlyRate;
            const overtimeHours = this.hours - 40;
            const overtimePay = overtimeHours * (this.hourlyRate * 1.5);
            return regularPay + overtimePay;
        }
    }
    // Formats and returns contract employee information
    displayInformation() {
        let info = "";
        info += "Name: " + this.firstName + " " + this.lastName + "\n";
        info += "Age: " + this.age + "\n";
        info += "Address: " + this.address + "\n";
        info += "Rank: " + this.rank + "\n";
        info += "SSN: " + this.ssn + "\n";
        info += "Hours worked: " + this.hours + "\n";
        info += "Hourly rate: " + this.hourlyRate.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) + "\n";
        info += "Total compensation: " + this.calculateCompensation().toLocaleString('en-US', { style: 'currency', currency: 'USD' }) + "\n";
        return info;
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
