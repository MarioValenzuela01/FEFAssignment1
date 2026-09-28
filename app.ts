import { FullTimeEmployee } from "./fulltimeemployee.js"; 
import { ContractEmployee } from "./contractemployee.js";

console.log("================================================"); 
console.log("     FEF ASSIGNMENT 1 - EMPLOYEE CALCULATOR "    ); 
console.log("================================================"); 

// TEST CASE 1: Valid Full-Time Employee

console.log("CASE 1: Saving Valid Full-Time Employee..."); 
const fulltimeValid = new FullTimeEmployee( 
    "123-456-789",          // Valid SSN (###-###-###) 
    "Valenzuela",           // Last Name 
    "Michael",              // First Name 
    "3232 Mapleton RD",     // Address 
    3,                      // Valid Rank (entre 1 y 5) 
    30,                     // Valid Age (&gt;= 16) 
    1200,                   // Salary 
    150,                    // Bonus 
    5                       // Overtime Hours 
    ); 
    
    fulltimeValid.saveEmployee(); 
    
    console.log("------------------------------------------------\n"); 
    
    // TEST CASE 2: Valid Contract Employee
    console.log("CASE 2: Saving Valid Contract Employee..."); 
    const contractValid = new ContractEmployee( 
        "987-654-321",              // Valid SSN 
        "LeBlanc",                    // Last Name 
        "Nicole",                    // First Name 
        "156 Ayer Rd",     // Address 
        4,                          // Valid rank
        25,                         // Valid Age
        45,                         // Hours worked (40 regular hrs + 5 overtime hrs at 1.5x) 
        25                          // Hourly Rate 
        
    ); 
         
    contractValid.saveEmployee(); 
        
    console.log("------------------------------------------------\n"); 
    
    // TEST CASE 3: Invalid Employee (Fails Age, Rank, and SSN validations)
    console.log("CASE 3: Attempting to save Invalid Employee...");
    const invalidEmp = new ContractEmployee( 
        "123456789",            // Invalid SSN (missing ###-###-### pattern)
        "Bustache",                 // Last Name 
        "Anna",               // First Name 
        "155 Preston St.",      // Address 
        8,                      // Invalid Rank (must be 1 to 5) 
        14,                     // Invalid Age (must be >= 16) 
        20,                     // Hours 
        20                      // Hourly Rate 
    ); 
    
    invalidEmp.saveEmployee(); 

    console.log("================================================\n");