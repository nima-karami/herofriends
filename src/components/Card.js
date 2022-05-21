import React from 'react';
import './Card.css';


const Card = (props) => {
    const {id, name, image} = props;
    return (
        <div className = 'card pointer dim ba br3 ma1 shadow-2 dib'>
            <img alt = 'header' className = 'card-image tc br3 br--top' src={`${image}`} />
            <div className='card-footer'>
                <h2 className='ma3'>{name}</h2>
                <p className='ma3'>Biography here</p>
                <p className='f7 ma3'>tags here</p>
            </div>
        </div>
    );
};


export default Card;