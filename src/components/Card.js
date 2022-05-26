import React from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faHandFist, faBolt, faShieldHalved, faSwords  } from '@fortawesome/free-solid-svg-icons';

const Card = (props) => {
    const {id, name, image, powerstats, publisher} = props;
    return (
        <div className = 'card pointer dim ba br3 ma1 shadow-2 dib'>
            <img alt = 'header' className = 'card-image tc br3 br--top' src={`${image}`} />
            <div className='card-footer'>
                <h2 className='ma3'>{name}</h2>
                <p className='ma3'> <FontAwesomeIcon icon={faBrain} />: {powerstats.intelligence} STR: {powerstats.strength} SPD: {powerstats.speed}
                 <br/> DUR: {powerstats.durability} PWR: {powerstats.power} CBT: {powerstats.combat}</p>
                <p className='f7 ma3'>{publisher || "N/A"}</p>
            </div>
        </div>
    );
};


export default Card;