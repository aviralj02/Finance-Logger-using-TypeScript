import { HasFormatter } from "../interfaces/HasFormatter.js"

export class Invoice implements HasFormatter{
    client: string
    details: string
    amount: number

    constructor(c: string, d: string, a: number){
        this.client = c
        this.details = d
        this.amount = a
    }

    format(): string {
        return `${this.client} owes Rs ${this.amount} for ${this.details}`
    }
}