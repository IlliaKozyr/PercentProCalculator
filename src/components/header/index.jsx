import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";
import logoImg from "./logo/logo.png";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuIconClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleCloseBurger = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="header">
            <div className="headerContainer">
                <NavLink to="/">
                    <img src={logoImg} alt="logo" className="logo" />
                </NavLink>
                <div className={`headerMenu menu ${isMenuOpen ? "_active" : ""}`}>
                    <div className="menuIcon" onClick={handleMenuIconClick}>
                        <span></span>
                    </div>
                    <nav className={`menuBody ${isMenuOpen ? "_active" : ""}`}>
                        <ul className="menuList">
                            <li>
                                <NavLink
                                    to="/сompound-interest"
                                    className="menuLink"
                                    onClick={handleCloseBurger}
                                >
                                    Калькулятор відсотків
                                </NavLink>
                            </li>
                            {/* <li>
                                <NavLink
                                    to="/simple-interest"
                                    className="menuLink"
                                    onClick={handleCloseBurger}
                                >
                                    Простий відсоток
                                </NavLink>
                            </li> */}
                            {/* <li>
                                <NavLink
                                    to="/сapital-gain"
                                    className="menuLink"
                                    onClick={handleCloseBurger}
                                >
                                    Приріст капіталу
                                </NavLink>
                            </li> */}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};
