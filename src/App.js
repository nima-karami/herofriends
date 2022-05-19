import React from "react";
import CardList from "./CardList";
import { heroes } from './heroes';
import SearchBox from "./SearchBox";

const App = () => {
    return (
        <div className="tc">
            <h1 className="tc">HeroFriends</h1>
            <SearchBox />
            <CardList heroes = {heroes} />
        </div>
    )
};


export default App;