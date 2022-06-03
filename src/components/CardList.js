import React from "react";
import Card from "./Card";

const CardList = ({heroes, setActiveHero}) => {
    // Create an array of cards for different heroes
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