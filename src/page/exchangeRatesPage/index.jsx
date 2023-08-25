import React, { useState, useEffect } from "react";
import './style.scss'

export const ExchangeRates = () => {
    const [data, setData] = useState([]);
    const [result, setResult] = useState({}); // Доданий стан для результату

    const currency = ['USD', 'CAD', 'EUR', 'PLN', 'CZK', ]

    useEffect(() => {
        const getRate = async () => {
            try {
                const response = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
                const responseData = await response.json();
                
                setData(responseData);

                // Додавання курсів до об'єкту result після отримання даних
                const rates = {};
                for (const currencyCode of currency) {
                    const currencyData = responseData.find(entry => entry.cc === currencyCode);
                    if (currencyData) {
                        rates[currencyCode] = [currencyData.cc, currencyData.txt, currencyData.rate];
                    }
                }
                setResult(rates);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        getRate();
    }, []); 

    console.log(result); // Результат буде виводитися після завершення запиту та обробки даних.

    return (
                <div className="container">
                    <div className="formBlock">
                        <div className="date">{data[0]?.exchangedate}</div>
                        {Object.values(result).map((pieceOfData, index) => (
                        // <div className="date" key={index}>{pieceOfData}</div>
                        console.log(pieceOfData)
                    ))}
                    </div>
                </div>
            ); }