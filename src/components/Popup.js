import React from "react";
import './Popup.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons"

const Popup = (props) => {
    const {popupDisplay, setPopupDisplay, activeHero} = props;
    if (popupDisplay) {
        return (
            <div className="popup animate fade-in">
                <FontAwesomeIcon onClick={() => setPopupDisplay()} className="close-btn pointer" icon={faXmark} />
                <div className = "popup-header">
                    
                    <h1>{activeHero.name}</h1>

                </div>

  
                <div className="popup-inner">
                    <div className="popup-image-container">
                        <img alt = 'header' className = 'popup-image' src={`${activeHero.images.md}`} />    
                    </div>
                    

                    <div className = "popup-biography">
                        <span>Full name: {activeHero.biography.fullName}</span> 
                        <span>Also known as: {(activeHero.biography.aliases) ? activeHero.biography.aliases.join(", "): 'N/A'}</span>
                        <span>Alignment: {activeHero.biography.alignment}</span>
                        <span>Occupation: {activeHero.work.occupation}</span>
                        <span>Birth place: {activeHero.biography.placeOfBirth}</span>
                        <span>Publisher: {activeHero.biography.publisher}</span>
                        <span>First appearance: {activeHero.biography.firstAppearance}</span>                    
                    </div>

                    <div className = "popup-powerstats">
                        <span>Intelligence: {activeHero.powerstats.intelligence}</span> 
                        <span>Strength: {activeHero.powerstats.strength}</span>
                        <span>Speed: {activeHero.powerstats.speed}</span> 
                        <span>Durability: {activeHero.powerstats.durability}</span> 
                        <span>Power: {activeHero.powerstats.power}</span> 
                        <span>Combat: {activeHero.powerstats.combat}</span>                     
                    </div>



                </div>
            </div>
        )
    }

}

export default Popup;
