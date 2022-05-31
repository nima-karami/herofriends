import React from "react";
import Card from "./Card";

const CardList = ({heroes, setActiveHero}) => {
    const cardComponent = heroes.map((hero, i) => {
        return <Card hero = {hero} setActiveHero = {setActiveHero}/>
    })
    
    return (
        <div>
            
            {cardComponent}

        </div>
    )  
};


export default CardList;