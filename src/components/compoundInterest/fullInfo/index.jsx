import React from "react";
import "./style.scss";
import { store } from "../../../store";

export const FullInformation = ({ compoundingFrequency }) => {
    return (
        <div className="popup">
            <div className="popup-buttons-container">
        <button
            className="scrollButtonPopup"
            onClick={() => {
                const popupContent = document.querySelector(".popup-content");
                if (popupContent) {
                    popupContent.scrollTop = popupContent.scrollHeight;
                }
            }}
        >
            Прокрутити до низу
        </button>
    </div>
            {Object.values(store.numbers.periodValues).map((number, index) => (
                <div className="fullInfoBlock" key={index}>
                    <ul className="fullInfoCard" key={index}>
                        <div className="infoContainer1">
                            <li>
                                <div className="time">
                                    {compoundingFrequency === "1"
                                        ? `${number.year} рік`
                                        : compoundingFrequency === "2"
                                        ? `${number.year} півріччя`
                                        : compoundingFrequency === "4"
                                        ? `${number.year} квартал`
                                        : compoundingFrequency === "12"
                                        ? `${number.year} місяць`
                                        : "null"}
                                </div>
                            </li>
                            <li>
                                <div>{`Всього накопичено: ${number.amount} грн.`}</div>
                            </li>
                            <li>
                                <div>{`Вирахований податок: ${number.amountMinusTax} грн.`}</div>
                            </li>
                        </div>
                        <div className="infoContainer2">
                            <li>
                                <div>{`Заплатите податку: ${number.taxPaid} грн.`}</div>
                            </li>
                            <li>
                                <div>{`Збільшення капіталу за період: ${number.incomeForTheYear} грн. (${number.incomeForTheYearPercentFull} %)`}</div>
                            </li>
                            <li>
                                <div>{`Чистий прибуток за період: ${number.incomeInPercentage} грн. (${number.incomeForTheYearPercentWithoutAttachment} %)`}</div>
                            </li>
                        </div>
                    </ul>
                </div>
            ))}
        </div>
    );
};
