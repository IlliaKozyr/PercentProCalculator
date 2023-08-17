import React, { useState } from "react";
import "./style.scss";
import { CompoundInterestFunc } from "../formula";
import { store } from "../../store";
import { FullInformation } from "./fullInfo";

export const СalculatorForm = () => {
    const [initialAmount, setInitialAmount] = useState("0");
    const [interestRate, setInterestRate] = useState("0");
    const [numberOfYears, setNumberOfYears] = useState("1");
    const [compoundingFrequency, setCompoundingFrequency] = useState("12");
    const [additionalContribution, setAdditionalContribution] = useState("0");
    const [showResult, setShowResult] = useState("0");
    const [drawShowResult, setDrawShowResult] = useState(true);
    const [includeTax, setIncludeTax] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(showResult <= 0);

    const handleCalculate = () => {
        const principal = Number(initialAmount);
        const rate = Number(interestRate);
        const time = Number(numberOfYears);
        const n = Number(compoundingFrequency);
        const additional = Number(additionalContribution);
        const tax = includeTax;

        const result = CompoundInterestFunc(
            principal,
            rate,
            time,
            n,
            additional,
            tax
        );

        setShowResult(result);
        setDrawShowResult(false);
        setIsButtonDisabled(result <= 0);
    };

    function openPopup() {
        let popup = document.querySelector(".popup-wrap");

        if (popup.classList.contains("is-active")) {
            popup.classList.remove("is-active");
        } else {
            popup.classList.add("is-active");
        }
    }

    return (
        <>
            {Object.values(store).map((number, index) => (
                <div className="container" key={index}>
                    <div className="formBlock">
                        <div className="inputsLabelsContainer">
                            <div className="inputLabelBlock">
                                <label>Введіть початкову суму:</label>
                                <input
                                    type="number"
                                    value={initialAmount}
                                    onChange={(event) =>
                                        setInitialAmount(event.target.value)
                                    }
                                />
                            </div>
                            <div className="inputLabelBlock">
                                <label>Введіть процентну ставку:</label>
                                <input
                                    type="number"
                                    value={interestRate}
                                    onChange={(event) =>
                                        setInterestRate(event.target.value)
                                    }
                                />
                            </div>
                        </div>

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

                        <div className="inputsLabelsContainer">
                            <div className="inputLabelBlock">
                                <label>
                                    Виберіть частоту складання відсотків:
                                </label>
                                <select
                                    value={compoundingFrequency}
                                    onChange={(event) =>
                                        setCompoundingFrequency(
                                            event.target.value
                                        )
                                    }
                                >
                                    <option value="1">Річна</option>
                                    <option value="2">Піврічна</option>
                                    <option value="4">Квартальна</option>
                                    <option value="12" defaultValue>
                                        Місячна
                                    </option>
                                    <option value="365">Щодня</option>
                                </select>
                            </div>
                            <div className="inputLabelBlock">
                                <label>
                                    Введіть додатковий внесок на кожен період:
                                </label>
                                <input
                                    type="number"
                                    value={additionalContribution}
                                    onChange={(event) =>
                                        setAdditionalContribution(
                                            event.target.value
                                        )
                                    }
                                />
                            </div>
                        </div>

                        <div className="tax">
                            <label>
                                Чи потрібно враховувати податок? (19.5%)
                            </label>
                            <input
                                type="checkbox"
                                className="inputCheckBox"
                                checked={includeTax}
                                onChange={(event) =>
                                    setIncludeTax(event.target.checked)
                                }
                            />
                        </div>

                        <button
                            className="button"
                            onClick={() => {
                                handleCalculate();
                            }}
                        >
                            Розрахувати
                        </button>
                        {drawShowResult ? null : (
                            <>
                                <div className="result">
                                    Через{" "}
                                    <span className="totalNumber">
                                        {number.periodValues[
                                            number.periodValues.length - 1
                                        ].year /
                                            compoundingFrequency ===
                                        "1"
                                            ? "1 рік"
                                            : number.periodValues[
                                                  number.periodValues.length - 1
                                              ].year /
                                                  compoundingFrequency ===
                                                  "2" ||
                                              number.periodValues[
                                                  number.periodValues.length - 1
                                              ].year /
                                                  compoundingFrequency ===
                                                  "3"
                                            ? number.periodValues[
                                                  number.periodValues.length - 1
                                              ].year /
                                                  compoundingFrequency +
                                              " роки"
                                            : number.periodValues[
                                                  number.periodValues.length - 1
                                              ].year /
                                                  compoundingFrequency +
                                              " років"}
                                    </span>{" "}
                                    інвестування Ви зможете накопичити{" "}
                                    <span className="totalNumber">
                                        {`${showResult} грн.`}
                                    </span>{" "}
                                    (
                                    <span className="totalNumber">
                                        {`${
                                            number.periodValues[
                                                number.periodValues.length - 1
                                            ].earnedPercentage
                                        } %`}
                                    </span>{" "}
                                    від початкової суми).{" "}
                                    {includeTax ? (
                                        <span>
                                            Ви заплатите{" "}
                                            <span className="totalNumber">
                                                {
                                                    number.periodValues[
                                                        number.periodValues
                                                            .length - 1
                                                    ].taxPaid
                                                }{" "}
                                                грн.
                                            </span>{" "}
                                            податку. Сума з вирахуванням податку
                                            становить{" "}
                                            <span className="totalNumber">
                                                {
                                                    number.periodValues[
                                                        number.periodValues
                                                            .length - 1
                                                    ].amountMinusTax
                                                }{" "}
                                                грн.
                                            </span>{" "}
                                        </span>
                                    ) : null}
                                </div>
                                <button
                                    className={`button ${
                                        isButtonDisabled ? "noActive" : ""
                                    }`}
                                    onClick={openPopup}
                                    disabled={isButtonDisabled}
                                >
                                    Детальна інформація
                                </button>
                                <div className="popup-wrap">
                                    <div className="popup-content">
                                        <span onClick={openPopup}></span>
                                        <FullInformation
                                            compoundingFrequency={
                                                compoundingFrequency
                                            }
                                        />
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            ))}
        </>
    );
};
