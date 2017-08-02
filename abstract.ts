abstract class Department {

    constructor(public name: string) {
    }

    printName(): void {
        console.log("Department name: " + this.name);
    }

    abstract printMeeting(): void; // must be implemented in derived classes
}

class AccountingDepartment extends Department {

    constructor() {
        super("Accounting and Auditing"); // constructors in derived classes must call super()
    }

    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am.");
         alert("The  Accounting Departmentt meets each Monday at 10am.");

}

    generateReports(): void {
        console.log("Generating accounting reports...");
    }
}
class SalesDepartment extends Department {

    constructor() {
        super("SAles and Auditing"); // constructors in derived classes must call super()
    }

    printMeeting(): void {
        console.log("The SalesDepartment meets each tuesday at 10am.");
        alert("The SalesDepartment meets each tuesday at 10am.");
 }

    generateReports(): void {
        console.log("Generating Sales reports...");
        alert("Generating Sales reports...");
    }
}

let department: Department; // ok to create a reference to an abstract type
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
let department1: Department; // ok to create a reference to an abstract type
department1 = new SalesDepartment(); // ok to create and assign a non-abstract subclass
department1.printName();
department1.printMeeting();