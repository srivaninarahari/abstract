var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("Department name: " + this.name);
    };
    return Department;
}());
var AccountingDepartment = (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, "Accounting and Auditing") || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log("The Accounting Department meets each Monday at 10am.");
        alert("The  Accounting Departmentt meets each Monday at 10am.");
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log("Generating accounting reports...");
    };
    return AccountingDepartment;
}(Department));
var SalesDepartment = (function (_super) {
    __extends(SalesDepartment, _super);
    function SalesDepartment() {
        return _super.call(this, "SAles and Auditing") || this;
    }
    SalesDepartment.prototype.printMeeting = function () {
        console.log("The SalesDepartment meets each tuesday at 10am.");
        alert("The SalesDepartment meets each tuesday at 10am.");
    };
    SalesDepartment.prototype.generateReports = function () {
        console.log("Generating Sales reports...");
        alert("Generating Sales reports...");
    };
    return SalesDepartment;
}(Department));
var department; // ok to create a reference to an abstract type
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
var department1; // ok to create a reference to an abstract type
department1 = new SalesDepartment(); // ok to create and assign a non-abstract subclass
department1.printName();
department1.printMeeting();
