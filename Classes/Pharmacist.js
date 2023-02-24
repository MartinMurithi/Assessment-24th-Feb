class Pharmacist{

  constructor(patientName) {
    this.patientName = patientName;
  }
  
  writePrescription() {
    console.log(`${this.patientName} was prescribed medicine by the pharmacist`);
  }
}

const pharm = new Pharmacist("Eric");
pharm.writePrescription();