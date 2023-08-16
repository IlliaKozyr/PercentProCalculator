import React from "react";
import "./style.scss";
import { store } from "../../../store";

export const FullInformation = ({ compoundingFrequency }) => {
    return (
        <div className="popup">
            <table className="table">
                <tbody>
                    <tr>
                        <td>
                            <div>Рік</div>
                        </td>
                        <td>
                            <div>Всього накопичено</div>
                        </td>
                        <td>
                            <div>Вирахований податок</div>
                        </td>
                        <td>
                            <div>Заплатите податку</div>
                        </td>
                        <td>
                            <div>Збільшення капіталу за період (%)</div>
                        </td>
                        <td>
                            <div>Чистий прибуток за період (%)</div>
                        </td>
                    </tr>
                </tbody>
            </table>
            {Object.values(store.numbers.periodValues).map((number, index) => (
                <table className="table" key={index}>
                    <tbody key={index}>
                        <tr key={index}>
                            <td>
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
                            </td>
                            <td>
                                <div>{number.amount + " грн."}</div>
                            </td>
                            <td>
                                <div>{number.amountMinusTax + " грн."}</div>
                            </td>
                            <td>
                                <div>{number.taxPaid + " грн."}</div>
                            </td>
                            <td>
                                <div>{`${number.incomeForTheYear} грн. (${number.incomeForTheYearPercentFull} %)`}</div>
                            </td>
                            <td>
                                <div>{`${number.incomeInPercentage} грн. (${number.incomeForTheYearPercentWithoutAttachment} %)`}</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            ))}
        </div>
    );
};
