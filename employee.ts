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
    
    // Validates if the age is 16 or older
    protected validateAge(): boolean {
        if (this.age >= 16){
            return true;
        }
        console.log(`Validation Error: Age must be 16 or older.`);
        return false; 
    }

    // Validates if the rank is between 1 and 5 inclusive
    protected validateRank(): boolean {
        if (this.rank >= 1 && this.rank <=5) {
            return true;
        }

        console.log(`Validation Error: Rank must be between 1 and 5.` );
        return false;
    }

    // Validates if the Social Security Number matches the pattern ###-###-###
    protected validateSSN(): boolean {
        const ssnRegex = /^\d{3}-\d{3}-\d{3}$/; 
        if (ssnRegex.test(this.ssn)) { 
            return true; 
        } console.log(`Validation Error: SSN must follow the format ###-###-###.`); 
        return false;

    }

}