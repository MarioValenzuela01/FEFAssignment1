import { Employee } from "./employee";
import { IEmployee } from "./iemployee";

export class FullTimeEmployee extends Employee implements IEmployee {
    public salary: number;
    public bonus: number;
    public overtimeHours: number;

    constructor(
        ssn: string, 
        lastName: string, 
        firstName: string, 
        address: string, 
        rank: number, 
        age: number, 
        salary: number,
        bonus: number,
        overtimeHour: number, 
    ) 
        {
        super(ssn, lastName, firstName, address, rank, age);
        this.salary = salary;
        this.bonus = bonus;
        this.overtimeHours = overtimeHour;
    }

    private calculateSalary(): number {
        const hourlyRate = this.salary/40;
        let overtimePay = 0

        if (this.overtimeHours > 0) { 
            if (this.overtimeHours <= 10) { 
                overtimePay = this.overtimeHours * (hourlyRate * 1.25); 
            } else if (this.overtimeHours <= 20) { 
                overtimePay = this.overtimeHours * (hourlyRate * 1.5); 
            } else if (this.overtimeHours <= 30) { 
                overtimePay = this.overtimeHours * (hourlyRate * 1.75); 
            } else { overtimePay = this.overtimeHours * (hourlyRate * 2.0); 

            } 
        }
        return this.salary + this.bonus + overtimePay

    }


    public displayInformation(): string {
        let info : string = "";

        info += "name: " + this.firstName + " " + this.lastName + "\n";
        info += "age: " + this.age + "\n";
        info += "address: " + this.address + "\n";
        info += "rank: " + this.rank + "\n";
        info += "SSN: " + this.ssn + "\n";
        info += "base salary: " + this.salary.toLocaleString('en-US', {style: 'currency', currency: 'USD'}) + "\n";
        info += "overtime hours: " + this.overtimeHours + "\n";
        info += "bonus: " + this.bonus.toLocaleString('en-US', {style: 'currency', currency: 'USD'}) + "\n";
        info += "total compensation: " + this.calculateCompensation().toLocaleString('en-US', {style: 'currency', currency: 'USD'}) + "\n";

        return info;
    }

    calculateCompensation(): number {
        return this.calculateSalary();
    }

    public saveEmployee(): void {
        if(this.validateAge() && this.validateRank() && this.validateSSN()) {
            console.log(this.displayInformation());
        } else {
            console.log("Save Failed");
        }
    }  



}