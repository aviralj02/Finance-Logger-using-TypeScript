export class Payment {
    constructor(r, d, a) {
        this.recipient = r;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.recipient} owed Rs ${this.amount} for ${this.details}`;
    }
}
