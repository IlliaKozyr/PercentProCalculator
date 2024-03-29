import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

export const MainPage = () => {
    return (
        <div className="container">
            <div className="formBlock">
                <h1 className="messageUnderDevelopment">
                    Вітаємо на нашому веб-порталі – вашому основному ресурсі для
                    розрахунків та фінансового планування!
                </h1>
                <p className="mainText">Ви можете знайти такі інструменти: </p>
                <nav>
                    <ul className="mainMenuList">
                        <li>
                            <Link
                                to="/сompound-interest"
                                className="button mainMenuLink"
                            >
                                Калькулятор складного і простого відсотків
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/exchange-rates"
                                className="button mainMenuLink"
                            >
                                Обмін валют
                            </Link>
                        </li>
                        <hr/>
                        <li>
                            <Link to="/certificate" className="button mainMenuLink">
                                Довідка
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};
