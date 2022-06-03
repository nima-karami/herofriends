import React from "react";
import './SearchBox.css';

const SearchBox = ({searchChange}) => {
    return(
        <div className="pb1">
            <input className="searchfield tc pa3 ba b--black" type="search" placeholder="Search Your Favorite Hero... or Villain... No Judgement!" onChange={searchChange}/>
        </div>
    );
};

export default SearchBox;
