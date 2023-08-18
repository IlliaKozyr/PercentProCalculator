import React, { useState } from "react";
import { Link } from "react-router-dom";
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
                <Link to="/сompound-interest">
                    <img src={logoImg} alt="logo" className="logo" />
                </Link>
                <div className={`headerMenu menu ${isMenuOpen ? "_active" : ""}`}>
                    <div className="menuIcon" onClick={handleMenuIconClick}>
                        <span></span>
                    </div>
                    <nav className={`menuBody ${isMenuOpen ? "_active" : ""}`}>
                        <ul className="menuList">
                            <li>
                                <Link
                                    to="/сompound-interest"
                                    className="menuLink"
                                    onClick={handleCloseBurger}
                                >
                                    Складний відсоток
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/simple-interest"
                                    className="menuLink"
                                    onClick={handleCloseBurger}
                                >
                                    Простий відсоток
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/сapital-gain"
                                    className="menuLink"
                                    onClick={handleCloseBurger}
                                >
                                    Приріст капіталу
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};
