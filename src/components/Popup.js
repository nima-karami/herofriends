import React from "react";
import './Popup.css';

const Popup = (props) => {
    return (
        <div className="popup br3">
            <div className="popup-inner">
                <button className="close-btn">close</button>
                <h1>Hi this is popup</h1>
            </div>
        </div>
    )

}

export default Popup;
