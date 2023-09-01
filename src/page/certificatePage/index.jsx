import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

export const Certificate = () => {
    return (
        <div className="container">
            <div className="formBlock">
                <Link to="/compound-interest-сertificate" className="button mainMenuLink">
                    Що таке складний відсоток?
                </Link>
                <Link to="/simple-interest-сertificate" className="button mainMenuLink">
                    Що таке простий відсоток?
                </Link>
                <Link to="/currence-exchange-сertificate" className="button mainMenuLink">
                    Про обмін валют
                </Link>
            </div>
        </div>
    );
};
