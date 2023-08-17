import React from "react";
import "./style.scss";
import { store } from "../../../store";

export const FullInformation = ({ compoundingFrequency }) => {
    return (
        <div className="popup">
            {/* <div className="fullInfoBlock">
                <ul className="fullInfoCard"> 
                    <li>
                        <div>Рік</div>
                    </li>
                    <li>
                        <div>Всього накопичено</div>
                    </li>
                    <li>
                        <div>Вирахований податок</div>
                    </li>
                    <li>
                        <div>Заплатите податку</div>
                    </li>
                    <li>
                        <div>Збільшення капіталу за період (%)</div>
                    </li>
                    <li>
                        <div>Чистий прибуток за період (%)</div>
                    </li>
                </ul>
            </div> */}
            {Object.values(store.numbers.periodValues).map((number, index) => (
                <div className="fullInfoBlock" key={index}>
                    <ul className="fullInfoCard" key={index}>
                        <li>
                            <div>
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
                        <li>
                            <div>{`Заплатите податку: ${number.taxPaid} грн.`}</div>
                        </li>
                        <li>
                            <div>{`Збільшення капіталу за період: ${number.incomeForTheYear} грн. (${number.incomeForTheYearPercentFull} %)`}</div>
                        </li>
                        <li>
                            <div>{`Чистий прибуток за період: ${number.incomeInPercentage} грн. (${number.incomeForTheYearPercentWithoutAttachment} %)`}</div>
                        </li>
                    </ul>
                </div>
            ))}
        </div>
    );
};
