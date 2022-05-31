import React from "react";
import './Popup.css';

const Popup = (props) => {
    const {popupDisplay, setPopupDisplay, activeHero} = props;
    if (popupDisplay) {
        return (
            <div className="popup br3">
                <div className="popup-inner">
                    <button onClick={() => setPopupDisplay} className="close-btn">close</button>
                    <h1>Hi this is popup. Active hero is {activeHero}</h1>
                </div>
            </div>
        )
    }

}

export default Popup;
