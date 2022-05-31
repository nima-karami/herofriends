import React from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faHandFist, faBolt, faShieldHalved, faDumbbell, faGun  } from '@fortawesome/free-solid-svg-icons';

const Card = (props) => {
    const {hero, setActiveHero} = props;
    const [id, name, image, powerstats, publisher] = [hero.id, hero.name, hero.images.md, hero.powerstats, hero.biography.publisher];
    return (
        <div onClick={() => setActiveHero(hero)} className = 'card pointer dim ba br3 ma1 shadow-2 dib'>
            <img alt = 'header' className = 'card-image tc br3 br--top' src={`${image}`} />
            <div className='card-footer'>
                <h2 className='ma3'>{name}</h2>
                <div className='ma3'>
                    <FontAwesomeIcon icon={faBrain} />: {powerstats.intelligence}
                    <FontAwesomeIcon className='ml2' icon={faDumbbell} />: {powerstats.strength}
                    <FontAwesomeIcon className='ml2' icon={faBolt} />: {powerstats.speed} <br/>
                    <FontAwesomeIcon icon={faShieldHalved} />: {powerstats.durability} 
                    <FontAwesomeIcon className='ml2' icon={faHandFist} />: {powerstats.power}
                    <FontAwesomeIcon className='ml2' icon={faGun}/>: {powerstats.combat}
                </div>
                <div className='f7 ma3'>{publisher || "N/A"}</div>
            </div>
        </div>
    );
};


export default Card;