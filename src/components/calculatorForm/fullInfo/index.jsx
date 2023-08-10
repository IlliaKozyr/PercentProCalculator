import React from "react";
import "./style.scss";
import { store } from "../../../store";

export const FullInformation = () => {
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
                </tr>
            </table>
            {Object.values(store.numbers.periodValues).map((number, index) => (
                <>
                    <table className="table">
                        <tr>
                            <td>
                                <div>{number.year + " рік"}</div>
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
                        </tr>
                    </table>
                </>
            ))}
        </div>
    );
};
