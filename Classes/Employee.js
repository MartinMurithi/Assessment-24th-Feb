class Employee {
  constructor(name) {
      this.name = name;
  }

  getDetails() {
    console.log(`Name: ${this.name}`);
  }
}

const emp = new Employee("Martin");
emp.getDetails();