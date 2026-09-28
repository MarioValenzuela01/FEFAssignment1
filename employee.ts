export abstract class Employee {
    public ssn: string;
    public lastName: string;
    public firstName: string;
    public address: string;
    public rank: number;
    public age: number;

    constructor(ssn: string, lastName: string, firstName: string, address: string, rank: number, age: number) {
        this.ssn = ssn;
        this.lastName = lastName;
        this.firstName = firstName;
        this.address = address;
        this.rank = rank;
        this.age = age;
    }

    // Methods

    protected validateAge(): boolean {
        if (this.age >= 16){
            return true;
        }
        console.log(`Error, the age: ${this.age} should be >= 16 `);
        return false; 
    }

    protected validateRank(): boolean {
        if (this.rank >= 1 && this.rank <=5) {
            return true;
        }

        console.log(`Error, rank ${this.rank} should be bettwen 1 to 5 inclusive` );
        return false;
    }

    protected validateSSN(): boolean {
        const ssnRegex = /^\\d{3}-\\d{3}-\\d{3}\\$/; 
        if (ssnRegex.test(this.ssn)) { 
            return true; 
        } console.log(`Error, The SSN (${this.ssn}) no pattern ###-###-###.`); 
        return false;

    }

}