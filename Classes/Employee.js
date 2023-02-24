class Employee {
  constructor(name, role) {
      this.name = name;
      this.role = role;
  }

  getDetails() {
    console.log(`Name: ${this.name}, Role:${this.role}`);
  }
}

const emp = new Employee("Martin", "Manager");
emp.getDetails();