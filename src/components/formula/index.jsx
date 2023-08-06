export const CompoundInterestFunc = (
    principal,
    rate,
    time,
    n,
    additionalContribution,
    tax
) => {
    // principal - початкова сума (початковий капітал)
    // rate - річна процентна ставка у відсотках
    // time - кількість років (термін вкладу)
    // n - частота складання відсотків за рік (річна, піврічна, квартальна, місячна тощо)
    // additionalContribution - додатковий внесок на кожен період

    // Перетворимо процентну ставку у десятковий формат
    const rateDecimal = rate / 100;

    // Розраховуємо загальну кількість періодів
    const periods = n * time;

    // Розраховуємо складний відсоток з додатковими внесками
    let amount = principal;
    for (let i = 0; i < periods; i++) {
        console.log(parseFloat(amount.toFixed(2)));
        amount = amount * (1 + rateDecimal / n) + additionalContribution;
    }

    if(tax) {
        amount = amount - (amount * 0.195);
    }

    // Округлюємо результат до двох знаків після коми
    return parseFloat(amount.toFixed(2));
};
