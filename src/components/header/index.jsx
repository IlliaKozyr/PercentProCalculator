import { React } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import logoImg from "./logo/logo.png";

export const Header = () => {
    const iconMenu = document.querySelector(".menuIcon");
    const menuBody = document.querySelector(".menuBody");
    
    const handleMenuIconClick = () => {
        document.body.classList.toggle("_lock");
        if (iconMenu && menuBody) {
            iconMenu.classList.toggle("_active");
            menuBody.classList.toggle("_active");
        }
    };

    const handleCloseBurger = () => {
        iconMenu.classList.remove("_active");
        menuBody.classList.remove("_active");
    };

    return (
        <div className="header">
            <div className="headerContainer">
                <Link to="/сompound-interest">
                    <img src={logoImg} alt="logo" className="logo" />
                </Link>
                <div className="headerMenu menu">
                    <div className="menuIcon" onClick={handleMenuIconClick}>
                        <span></span>
                    </div>
                    <nav className="menuBody">
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
