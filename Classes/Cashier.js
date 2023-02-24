
class Cashier {
    constructor(cashierName) {
        this.cashierName = cashierName;
    }

    collectCash() {
        console.log(`${this.cashierName} collected the cash`);
    }

    returnCash() {
        console.log(`${this.cashierName} returned the collected cash to the pharmacy`);
    }
}