import React from "react";
import "./style.scss";
import { store } from "../../../store";

export const FullInformation = ({ compoundingFrequency }) => {
    return (
        <div className="popup">
            <table className="table">
                <tr>
                    <td>
                        <div>Рік</div>
                    </td>
                    <td>
                        <div>Всього накопичено</div>
                    </td>
                    <td>
                        <div>Вирухований податок</div>
                    </td>
                    <td>
                        <div>Заплатите податку</div>
                    </td>
                    <td>
                        <div>Прибуток за рік</div>
                    </td>
                    <td>
                        <div>Прибуток за рік (%)</div>
                    </td>
                </tr>
            </table>
            {Object.values(store.numbers.periodValues).map((number, index) => (
                <>
                    <table className="table">
                        <tr>
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
                    </table>
                </>
            ))}
        </div>
    );
};
