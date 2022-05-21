import React from "react";

const SearchBox = ({searchChange}) => {
    return(
        <div className="pb5">
            <input className="tc pa3 ba b--black" style={{width: "30em"}} type="search" placeholder="Search Your Favorite Hero... or Villain... No Judgement!" onChange={searchChange}/>
        </div>
    );
};

export default SearchBox;
