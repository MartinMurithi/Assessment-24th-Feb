// A manager manages employees 

// A manager can sometimes work as a cashier and a pharmacist. 



class Pharmacy{
    constructor(name, role, PharmacyName) {
        this.role = role;
        this.name = name;
        this.PharmacyName = PharmacyName;
    }

    work() {
        console.log(`${this.name} works as a ${this.role} at ${this.PharmacyName}`);
    }

}

class Pharmacist extends Pharmacy{
    constructor() {
        super('Martin', 'Pharmacist', 'Jitu');
    }

    prescribe() {
        console.log(`${this.name} prescribed a patient panadol`);
    }
}

let pharmacist = new Pharmacist();
//pharmacist.prescribe();

class Cashier extends Pharmacy {
    constructor(amount) {
        super('Alex', 'Cashier', 'Pamco');
        this.amount = amount
    }

    collect() {
        console.log(`${this.name}, a ${this.role} from ${this.PharmacyName} collected ${this.amount} from other branches`);
    }
}

let cashier = new Cashier(100000);
//cashier.collect();

class Manager extends Pharmacy{
    constructor(employeeOne, employeeTwo, employeeThree) {
        super('Mark', 'Manager');
        this.employeeOne = employeeOne;
        this.employeeTwo = employeeTwo;
        this.employeeThree = employeeThree;
    }

    manage() {
        console.log(`${this.name} the ${this.role} manages ${this.employeeOne}, ${this.employeeTwo}, ${this.employeeThree}`);
    }

    prescribe() {
        console.log(`${this.name} the ${this.role} prescribed medicine to the patients`);
    }

    cash() {
        console.log(`${this.name} can also work as a ${this.role}`);
    }
}

let manager = new Manager('Eric', 'Martin', 'Otieno');
//manager.manage()

