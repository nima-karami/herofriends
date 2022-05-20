import React, { Component } from "react";
import CardList from "./CardList";
import { heroes } from './heroes';
import SearchBox from "./SearchBox";
import './App.css'



class App extends Component {
    constructor() {
        super();
        this.state = {
            heroes: heroes,
            searchField: ''
        };
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }

    render(){
        const filteredHeroes = this.state.heroes.filter(heroes => {
            return heroes.name.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase());
        });
        
        return (
            <div className="tc">
                <h1 className="tc f1">Hero Friends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <CardList heroes = {filteredHeroes} />
            </div>
        )
    }
    
};


export default App;