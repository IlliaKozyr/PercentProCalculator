import { store } from "../../store";

export const CompoundInterestFunc = (
    principal,
    rate,
    time,
    n,
    additionalContribution,
    tax, 
    choice
) => {
    // Перетворимо процентну ставку у десятковий формат
    const rateDecimal = rate / 100;
    // Розраховуємо загальну кількість періодів
    const periods = n * time;

    let amountMinusTax = 0;
    let taxPaid = 0;
    let amount = principal;
    let year = 0;
    let lastYearsAmount = 0;
    let incomeForThePastYear = 0;
    let incomeInPercentage = 0;
    let incomeForTheYearPercentFull = 0;
    let incomeForTheYearPercentWithoutAttachment = 0;
    let earnedPercentage = 0;

    let fullTaxPaid = 0;

    // principal - початкова сума (початковий капітал)
    // rate - річна процентна ставка у відсотках
    // time - кількість років (термін вкладу)
    // n - частота складання відсотків за рік (річна, піврічна, квартальна, місячна тощо)
    // additionalContribution - додатковий внесок на кожен період

    // Розраховуємо складний відсоток з додатковими внесками
    store.clearNumberForOnePeriod();

    for (let i = 0; i < periods; i++) {

        if (!choice) {
            lastYearsAmount = amount;
            amount = amount * (1 + rateDecimal / n) + additionalContribution;
            
        } else {
            lastYearsAmount = amount;
            amount = (amount + ((principal / 100 * rate) / n)) + additionalContribution;
            console.log(amount, additionalContribution)
        }
         
        // ТРЕБА ВІДКОРЕГУВАТИ ФОРМУЛУ В ПРОСТИХ ВІДСОТКАХ КАША

        year = i + 1;
        incomeForThePastYear = amount - lastYearsAmount;
        incomeInPercentage = incomeForThePastYear - additionalContribution;
        if (amount !== 0) {
            incomeForTheYearPercentFull = incomeForThePastYear / (amount / 100);
            incomeForTheYearPercentWithoutAttachment = incomeInPercentage / (amount / 100);
        } else {
            incomeForTheYearPercentFull = 0;
            incomeForTheYearPercentWithoutAttachment = 0;
        }
        
        if (principal !== 0) {
            earnedPercentage = ((amount - principal) / principal) * 100;
        } else {
            earnedPercentage = 0;
        }
        

        taxPaid = incomeInPercentage * 0.195;
        fullTaxPaid = fullTaxPaid + taxPaid;
        amountMinusTax = amount - fullTaxPaid;
        var periodData = {
            amount: parseFloat(amount.toFixed(2)),
            amountMinusTax: parseFloat(amountMinusTax.toFixed(2)),
            taxPaid: parseFloat(taxPaid.toFixed(2)),
            year: parseFloat(year),
            incomeForTheYear: parseFloat(incomeForThePastYear.toFixed(2)),
            incomeInPercentage: parseFloat(incomeInPercentage.toFixed(2)),
            incomeForTheYearPercentFull: parseFloat(incomeForTheYearPercentFull.toFixed(2)),
            incomeForTheYearPercentWithoutAttachment: parseFloat(incomeForTheYearPercentWithoutAttachment.toFixed(2)),
            earnedPercentage: parseFloat(earnedPercentage.toFixed(2)),
        };

        store.addTaxPaid(parseFloat(fullTaxPaid.toFixed(2)));
        store.addNumberForOnePeriod(periodData);
    }
    
    // Округлюємо результат до двох знаків після коми
    return parseFloat(amount.toFixed(2));
};