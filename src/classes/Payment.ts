import { HasFormatter } from "../interfaces/HasFormatter.js"

export class Payment implements HasFormatter{
    recipient: string
    details: string
    amount: number

    constructor(r: string, d: string, a: number){
        this.recipient = r
        this.details = d
        this.amount = a
    }

    format(): string {
        return `${this.recipient} owed Rs ${this.amount} for ${this.details}`
    }
}