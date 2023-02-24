



class Cashier extends Employee {
  collectCash(amount) {
    // code for collecting cash goes here
  }

  returnCash(amount) {
    // code for returning cash goes here
  }
}

class Manager extends Employee {
  constructor(name, age, gender, employees) {
    super(name, age, gender);
    this.employees = employees;
  }

  manageEmployees() {
    // code for managing employees goes here
  }

  collectCash(amount) {
    // code for collecting cash goes here
  }

  returnCash(amount) {
    // code for returning cash goes here
  }

  writePrescription(patient) {
    // code for writing prescription goes here
  }
}
