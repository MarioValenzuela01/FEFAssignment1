export class Employee {
    ssn;
    lastName;
    firstName;
    address;
    rank;
    age;
    constructor(ssn, lastName, firstName, address, rank, age) {
        this.ssn = ssn;
        this.lastName = lastName;
        this.firstName = firstName;
        this.address = address;
        this.rank = rank;
        this.age = age;
    }
    // Methods
    // Validates if the age is 16 or older
    validateAge() {
        if (this.age >= 16) {
            return true;
        }
        console.log(`Validation Error: Age must be 16 or older.`);
        return false;
    }
    // Validates if the rank is between 1 and 5 inclusive
    validateRank() {
        if (this.rank >= 1 && this.rank <= 5) {
            return true;
        }
        console.log(`Validation Error: Rank must be between 1 and 5.`);
        return false;
    }
    // Validates if the Social Security Number matches the pattern ###-###-###
    validateSSN() {
        const ssnRegex = /^\d{3}-\d{3}-\d{3}$/;
        if (ssnRegex.test(this.ssn)) {
            return true;
        }
        console.log(`Validation Error: SSN must follow the format ###-###-###.`);
        return false;
    }
}
