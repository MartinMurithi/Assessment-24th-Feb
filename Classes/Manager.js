
class Manager extends Employee {
    constructor(managerName) {
        super();
        this.managerName = managerName;
    }

    manageEmp() {
        console.log(`${this.managerName} manages eomloyees such as ${emp.getDetails}`);
    }
}