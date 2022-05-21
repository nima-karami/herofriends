import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import './App.css';


class App extends Component {
    constructor() {
        super();
        this.state = {
            heroes: [],
            searchField: ''
        };
    }

    componentDidMount() {
        fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
            .then(response => response.json())
            .then(heroes => this.setState({ heroes: heroes }))   
    };

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }

    render(){
        const filteredHeroes = this.state.heroes.filter(hero => {
            return hero.name.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase());
        });
        
        if (!this.state.heroes.length) {
            return <h1 className="tc f1">Loading...</h1>
        }

        else {
            return (
                <div className="tc">
                    <h1 className="tc f1 pt4">Hero Friends</h1>
                    <SearchBox searchChange = {this.onSearchChange}/>
                    <Scroll>
                        <CardList heroes = {filteredHeroes} />
                    </Scroll>
                </div>
            )
        }
    }
};


export default App;