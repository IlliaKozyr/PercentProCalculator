import { makeAutoObservable } from "mobx";

class CalculatorStore {
    numbers = {
        totalAmount: Number,
        tax: Number,
        taxPaid: Number,
        periodValues: [],
    };

    constructor() {
        makeAutoObservable(this);
    }

    addNumber(number) {
        this.numbers.totalAmount = number;
    }

    addTax(number) {
        this.numbers.tax = number;
    }

    addNumberForOnePeriod(number) {
        this.numbers.periodValues.push(number);
    }

    addTaxPaid(number) {
        this.numbers.taxPaid = Number(number);
    }
}

export const store = new CalculatorStore();
