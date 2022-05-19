import React, {Component} from 'react';
import './Card.css';


const Card = (props) => {
    const {id, name, image} = props;
    return (
        <div className = 'card grow ba br3 ma2 shadow-2 dib'>
            <img alt = 'header' className = 'card-image tc br3 br--top' src={`http://${image}`} />
            <div className='card-footer'>
                <h2 className='ma3'>{props.name}</h2>
                <p className='ma3'>Biography here</p>
                <p className='f7 ma3'>tags tags</p>
            </div>
        </div>
    );
};


export default Card;