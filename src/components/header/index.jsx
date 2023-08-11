import React from "react";
import "./style.scss";
import logoImg from "./logo/logo.png";

export const Header = () => {
    return (
        <>
            <div className="headerBlock">
                <div>
                    <img src={logoImg} alt="logo" className="logo" />
                </div>
                <nav className="mainMenu">
                    <ul>
                        {/* <li className="navItem"><a href="/">Калькулятор складного відсотка</a></li> */}
                    </ul>
                </nav>
            </div>
        </>
    );
};
