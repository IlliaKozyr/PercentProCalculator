import { store } from "../../store";

export const CompoundInterestFunc = (
    principal,
    rate,
    time,
    n,
    additionalContribution,
    tax
) => {
    // Перетворимо процентну ставку у десятковий формат
    const rateDecimal = rate / 100;
    // Розраховуємо загальну кількість періодів
    const periods = n * time;

    let amountMinusTax;
    let taxPaid;
    let amount = principal;
    let year;
    let lastYearsAmount = 0;
    let incomeForThePastYear;
    let incomeInPercentage;
    let incomeForTheYearPercentFull;
    let incomeForTheYearPercentWithoutAttachment;

    // principal - початкова сума (початковий капітал)
    // rate - річна процентна ставка у відсотках
    // time - кількість років (термін вкладу)
    // n - частота складання відсотків за рік (річна, піврічна, квартальна, місячна тощо)
    // additionalContribution - додатковий внесок на кожен період

    // Розраховуємо складний відсоток з додатковими внесками
    store.clearNumberForOnePeriod();

    for (let i = 0; i < periods; i++) {
        lastYearsAmount = amount;
        amount = amount * (1 + rateDecimal / n) + additionalContribution;
        amountMinusTax = amount - amount * 0.195;
        taxPaid = amount - amountMinusTax;
        year = i + 1;

        incomeForThePastYear = amount - lastYearsAmount;
        incomeInPercentage = incomeForThePastYear - additionalContribution;

        incomeForTheYearPercentFull = incomeForThePastYear / (amount / 100);
        incomeForTheYearPercentWithoutAttachment = incomeInPercentage / (amount / 100)
        console.log(incomeForTheYearPercentFull, incomeForTheYearPercentWithoutAttachment)

        var periodData = {
            amount: parseFloat(amount.toFixed(2)),
            amountMinusTax: parseFloat(amountMinusTax.toFixed(2)),
            taxPaid: parseFloat(taxPaid.toFixed(2)),
            year: parseFloat(year),
            incomeForTheYear: parseFloat(incomeForThePastYear.toFixed(2)),
            incomeInPercentage: parseFloat(incomeInPercentage.toFixed(2)),
            incomeForTheYearPercentFull: parseFloat(incomeForTheYearPercentFull.toFixed(2)),
            incomeForTheYearPercentWithoutAttachment: parseFloat(incomeForTheYearPercentWithoutAttachment.toFixed(2))
        };

        store.addNumberForOnePeriod(periodData);
    }
    
    // Округлюємо результат до двох знаків після коми
    return parseFloat(amount.toFixed(2));
};
