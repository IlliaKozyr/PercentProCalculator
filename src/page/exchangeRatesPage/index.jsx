import React, { useState, useEffect } from "react";
import "./style.scss";
import { format } from "date-fns";

export const ExchangeRates = () => {
    const date = new Date();
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(true);

    const [currencyChange, setCurrencyChange] = useState(0);
    const [enterAmount, setEnterAmount] = useState(0);
    const [activeButton, setActiveButton] = useState("buy");
    const [changeName, setChangeName] = useState(" USD");
    const [currency, setCurrency] = useState(0)

    useEffect(() => {
        const getRate = async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
                );
                const responseData = await response.json();

                const filteredData = responseData.filter((pieceOfData) => {
                    const selectedCurrencies = ["EUR", "USD"];
                    return selectedCurrencies.includes(pieceOfData.cc);
                });

                setResult(filteredData);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        getRate();
    }, []);

    useEffect(() => {
            if (currencyChange === "0" || currencyChange === 0) {
                setCurrency(result[0]?.rate)
                return setChangeName(" USD");
            } else {
                setCurrency(result[1]?.rate)
                return setChangeName(" EUR");
            }
    }, [currencyChange, result, currency, enterAmount, activeButton]);

    const buyCurrency = () => {
        return (enterAmount / currency).toFixed(2);
    };

    const sellCurrency = () => {
        return (enterAmount * currency).toFixed(2);
    };

    return (
        <div className="container">
            <div className="formBlock">
                <div className="time">
                    Курс валют на {format(date, "dd.MM.yyyy")}
                </div>
                {loading ? (
                    <div className="loading">Завантаження...</div>
                ) : (
                    <>
                        <div className="exchangeRatesPage">
                            {result.map((pieceOfData, index) => (
                                <div key={index} className="currencyCard">
                                    <p>{pieceOfData?.txt}</p>
                                    <div className="sellAndBuyBlock">
                                        <p>Купити: {pieceOfData?.rate + 0.5}</p>
                                        <p>Продати: {pieceOfData?.rate}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="currencyExchangeBlock">
                            <div className="currencyExchangeInput">
                                <label>Виберіть валюту:</label>
                                <select
                                    name="changeCurrency"
                                    id=""
                                    value={currencyChange}
                                    onChange={(event) =>
                                        setCurrencyChange(event.target.value)
                                    }
                                >
                                    <option value={0}>USD</option>
                                    <option value={1}>EUR</option>
                                </select>
                                <div className="BuySellChange">
                                    <button
                                        className={`currencyButton ${
                                            activeButton === "buy"
                                                ? "__active"
                                                : ""
                                        }`}
                                        onClick={() => setActiveButton("buy")}
                                    >
                                        Купівля
                                    </button>
                                    <button
                                        className={`currencyButton ${
                                            activeButton === "sell"
                                                ? "__active"
                                                : ""
                                        }`}
                                        onClick={() => setActiveButton("sell")}
                                    >
                                        Продаж
                                    </button>
                                </div>
                                <label>
                                    Введіть суму в{" "}
                                    {activeButton === "buy"
                                        ? "гривнях"
                                        : "валюті"}
                                    :
                                </label>
                                <input
                                    type="number"
                                    value={enterAmount}
                                    onChange={(event) =>
                                        setEnterAmount(event.target.value)
                                    }
                                />
                                {enterAmount ? (
                                    <h2>
                                        {activeButton === "buy"
                                            ? buyCurrency() + changeName
                                            : sellCurrency() + " грн."}
                                    </h2>
                                ) : (
                                    null
                                )}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
