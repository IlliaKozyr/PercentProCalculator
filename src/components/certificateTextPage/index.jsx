import React from "react";
import "./style.scss";

export const CertificateTextPage = ({ title, text }) => {
    return (
        <div className="container">
            <div className="formBlock">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    );
};
