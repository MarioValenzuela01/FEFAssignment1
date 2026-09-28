import { Employee } from "./employee.js";
import { IEmployee } from "./iemployee.js";

export class ContractEmployee extends Employee implements IEmployee {

    public hours: number;
    public hourlyRate: number;

    constructor(
        ssn: string, 
        lastName: string, 
        firstName: string, 
        address: string, 
        rank: number, 
        age: number, 
        hours: number,
        hourlyRate: number,
    ) 
        {
        super(ssn, lastName, firstName, address, rank, age);
        this.hours = hours;
        this.hourlyRate = hourlyRate;
        
    }

    // Calculates compensation (regular pay + 1.5x overtime for hours over 40)
    public calculateCompensation(): number {
        if(this.hours <= 40){
            return this.hours * this.hourlyRate
        }else{
            const regularPay = 40 * this.hourlyRate;
            const overtimeHours = this.hours - 40;
            const overtimePay = overtimeHours * (this.hourlyRate*1.5);
            return regularPay + overtimePay;
        }
    }

    // Formats and returns contract employee information
    public displayInformation(): string {
        let info: string = ""; 
        
        info += "Name: " + this.firstName + " " + this.lastName + "\n"; 
        info += "Age: " + this.age + "\n"; 
        info += "Address: " + this.address + "\n"; 
        info += "Rank: " + this.rank + "\n"; 
        info += "SSN: " + this.ssn + "\n"; 
        info += "Hours worked: " + this.hours + "\n"; 
        info += "Hourly rate: " + this.hourlyRate.toLocaleString('en-US', {style: 'currency', currency: 'USD'}) + "\n"; 
        info += "Total compensation: " + this.calculateCompensation().toLocaleString('en-US', {style: 'currency', currency: 'USD'}) + "\n"; 
        
        return info;
    }

    // Validates data and outputs employee details or failure message
    public saveEmployee(): void { 
        const isAgeValid = this.validateAge(); 
        const isRankValid = this.validateRank(); 
        const isSSNValid = this.validateSSN(); 
        if (isAgeValid && isRankValid && isSSNValid) { 
            console.log(this.displayInformation()); 
        } else { 
            console.log("Save Failed"); 
        } 
    }


}