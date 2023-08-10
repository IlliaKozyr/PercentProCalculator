import { makeAutoObservable } from "mobx";

class CalculatorStore {
    numbers = {
        totalAmount: Number,
        tax: Number,
        taxPaid: Number,
        periodValues: []
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

    addNumberForOnePeriod(periodData) {
        this.numbers.periodValues.push(periodData);
    }

    
    clearNumberForOnePeriod() {
        this.numbers.periodValues = [];
    }

    addTaxPaid(number) {
        this.numbers.taxPaid = Number(number);
    }
}

export const store = new CalculatorStore();
