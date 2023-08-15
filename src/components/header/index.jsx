import React from "react";
import "./style.scss";
import logoImg from "./logo/logo.png";

export const Header = () => {
    const handleMenuIconClick = () => {
        document.body.classList.toggle('_lock');
        const iconMenu = document.querySelector(".menuIcon");
        const menuBody = document.querySelector(".menuBody");
        if (iconMenu && menuBody) {
            iconMenu.classList.toggle("_active");
            menuBody.classList.toggle("_active");
        }
    };

    return (
        <div className="header">
            <div className="headerContainer">
                <a href="/">
                    <img src={logoImg} alt="logo" className="logo" />
                </a>
                <div className="headerMenu menu">
                    <div className="menuIcon" onClick={handleMenuIconClick}>
                        <span></span>
                    </div>
                    <nav className="menuBody">
                        <ul className="menuList">
                            <li>
                                <a href="/" className="menuLink">
                                    Калькулятор складного відсотка
                                </a>
                            </li>
                            <li>
                                <a href="/" className="menuLink">
                                    Розділ 2
                                </a>
                            </li>
                            <li>
                                <a href="/" className="menuLink">
                                    Розділ 3
                                </a>
                            </li>
                            <li>
                                <a href="/" className="menuLink">
                                    beta 1.01
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};
