import React from "react";
import "./style.scss"
import { PopupButtonScroll } from "./popupButtonScroll";
import { FullInformation } from "../fullInfo";

export const Popup = ({compoundingFrequency}) => {

    function openPopup() {
        let popup = document.querySelector(".popup-wrap");

        if (popup.classList.contains("is-active")) {
            popup.classList.remove("is-active");
        } else {
            popup.classList.add("is-active");
        }
    }
    return (
        <div className="popup-wrap">
            <div className="popup-content">
                <PopupButtonScroll />
                <span onClick={openPopup}></span>
                <FullInformation compoundingFrequency={compoundingFrequency} />
            </div>
        </div>
    );
};
