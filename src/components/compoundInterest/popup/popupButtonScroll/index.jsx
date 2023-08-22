import React, { useState, useEffect } from "react";
import "./style.scss";
import arrowToDown from "./images/arrowToDown.png";

export const PopupButtonScroll = () => {
  const [scrolledToBottom, setScrolledToBottom] = useState(false);

  useEffect(() => {
    const popupContent = document.querySelector(".popup-content");
    if (popupContent) {
      const handleScroll = () => {
        const isScrolledToBottom =
          popupContent.scrollTop ===
          popupContent.scrollHeight - popupContent.clientHeight;
        setScrolledToBottom(isScrolledToBottom);
      };

      popupContent.addEventListener("scroll", handleScroll);
      return () => {
        popupContent.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const handleButtonClick = () => {
    const popupContent = document.querySelector(".popup-content");
    if (popupContent) {
      if (scrolledToBottom) {
        popupContent.scrollTop = 0;
      } else {
        popupContent.scrollTop = popupContent.scrollHeight;
      }
    }
  };

  return (
    <div className="popup-buttons-container">
      <button className="scrollButtonPopup" onClick={handleButtonClick}>
        <img
          src={arrowToDown}
          alt="стрілка"
          className={scrolledToBottom ? "flipped" : ""}
        />
      </button>
    </div>
  );
};

