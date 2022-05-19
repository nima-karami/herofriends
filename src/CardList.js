import React from "react";
import Card from "./Card";

const CardList = ({heroes}) => {
    
    const cardComponent = heroes.map((hero, i) => {
        return <Card id={hero.id} name={hero.name} image={hero.image} />
    })
    
    return (
        <div>
            
            {cardComponent}

        </div>
    )  
};


export default CardList;