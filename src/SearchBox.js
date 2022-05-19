import React from "react";

const SearchBox = ({searchChange}) => {
    return(
        <div className="pa2">
            <input className="pa3 ba b--black" type="search" placeholder="Search Your Favorite Hero" onChange={searchChange}/>
        </div>
    );
};

export default SearchBox;
