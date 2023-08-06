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
                <nav>
                    <ul>
                        <li></li>
                    </ul>
                </nav>
            </div>
        </>
    );
};
