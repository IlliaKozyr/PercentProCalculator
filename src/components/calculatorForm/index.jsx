import React, { useState } from "react";
import "./style.scss";
import { CompoundInterestFunc } from "../formula";

export const СalculatorForm = () => {
    const [initialAmount, setInitialAmount] = useState("0");
    const [interestRate, setInterestRate] = useState("0");
    const [numberOfYears, setNumberOfYears] = useState("1");
    const [compoundingFrequency, setCompoundingFrequency] = useState("1");
    const [additionalContribution, setAdditionalContribution] = useState("0");
    const [showResult, setShowResult] = useState("0");
    const [drawShowResult, setDrawShowResult] = useState(true);
    

    console.log(
        initialAmount,
        interestRate,
        numberOfYears,
        compoundingFrequency,
        additionalContribution
    );

    const handleCalculate = () => {
        const principal = Number(initialAmount);
        const rate = Number(interestRate);
        const time = Number(numberOfYears);
        const n = Number(compoundingFrequency);
        const additional = Number(additionalContribution);

        const result = CompoundInterestFunc(
            principal,
            rate,
            time,
            n,
            additional
        );

        setShowResult(result);
        setDrawShowResult (false);
    };
    return (
        <>
            <div className="container">
                <div className="formBlock">
                    <label>Введіть початкову суму:</label>
                    <input
                        type="number"
                        value={initialAmount}
                        onChange={(event) =>
                            setInitialAmount(event.target.value)
                        }
                    />

                    <label>Введіть річну процентну ставку (у відсотках)</label>
                    <input
                        type="number"
                        value={interestRate}
                        onChange={(event) =>
                            setInterestRate(event.target.value)
                        }
                    />

                    <label>Виберіть термін вкладу:</label>
                    <select
                        value={numberOfYears}
                        onChange={(event) =>
                            setNumberOfYears(event.target.value)
                        }
                    >
                        <option value="1">1 рік</option>
                        <option value="2">2 роки</option>
                        <option value="3">3 роки</option>
                        <option value="4">4 роки</option>
                        <option value="5">5 років</option>
                        <option value="6">6 років</option>
                        <option value="7">7 років</option>
                        <option value="8">8 років</option>
                        <option value="9">9 років</option>
                        <option value="10">10 років</option>
                        <option value="15">15 років</option>
                        <option value="20">20 років</option>
                        <option value="25">25 років</option>
                        <option value="30">30 років</option>
                        <option value="40">40 років</option>
                    </select>

                    <label>Виберіть частоту складання відсотків:</label>
                    <select
                        value={compoundingFrequency}
                        onChange={(event) =>
                            setCompoundingFrequency(event.target.value)
                        }
                    >
                        <option value="1">Річна</option>
                        <option value="6">Піврічна</option>
                        <option value="4">Квартальна</option>
                        <option value="12">Місячна</option>
                    </select>

                    <label>Введіть додатковий внесок на кожен період:</label>
                    <input
                        type="number"
                        value={additionalContribution}
                        onChange={(event) =>
                            setAdditionalContribution(event.target.value)
                        }
                    />

                    <button onClick={handleCalculate}>Розрахувати</button>
                        {drawShowResult ? null : <div className="result">
                        Через{" "}
                        <span className="totalNumber">
                            {numberOfYears === "1"
                                ? "1 рік"
                                : numberOfYears === "2" || numberOfYears === "3"
                                ? numberOfYears + " роки"
                                : numberOfYears + " років"}
                        </span>{" "}
                        інвестування Ви зможете накопичити{" "}
                        <span className="totalNumber">{showResult}</span> грн.
                    </div>}

                    {console.log(showResult)}
                    
                </div>
            </div>
        </>
    );
};
