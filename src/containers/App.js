import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import Popup from "../components/Popup";
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin  } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'



class App extends Component {
    constructor() {
        super();
        this.state = {
            heroes: [],
            searchField: '',
            popupDisplay: false,
            activeHero: {},
        };
    }

    // Get the hero data from the REST API
    componentDidMount() {
        fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
            .then(response => response.json())
            .then(heroes => this.setState({ heroes: heroes }))   
    };

    // Function to change the search state
    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }

    // Function to change the active hero
    setActiveHero = (hero) => {
        this.setState({activeHero: hero});
        this.setPopupDisplay();
        console.log(hero);
    }

    // Toggle the popup display
    setPopupDisplay = () => {
        if (this.state.popupDisplay) {
            this.setState({popupDisplay: false});
        }
        else {
            this.setState({popupDisplay: true})
        }
    }

    render(){
        // Filter the list of heroes based on the search field
        const filteredHeroes = this.state.heroes.filter(hero => {
            return hero.name.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase());
        });
        
        // Wait for the heroes list to load
        if (!this.state.heroes.length) {
            return <h1 className="tc f1">Loading...</h1>
        }

        else {
            return (
                <div className="tc ">
                    <header>
                        <h1 className="tc f1 pt4">Hero Friends</h1>
                        <SearchBox searchChange = {this.onSearchChange}/>
                        <div  className="white pa3">
                            <span>Created by Nima Karami </span>
                            <a href="mailto:nkarami.dev@gmail.com" target="_blank" title="email" className="social-link"><FontAwesomeIcon className="pl2"icon={faEnvelope} /></a>
                            <a href="https://www.linkedin.com/in/nima-karami/" target="_blank" title="github" className="social-link"><FontAwesomeIcon className="pl2"icon={faLinkedin} /></a>
                            <a href="https://github.com/nima-karami" target="_blank" title="github" className="social-link"><FontAwesomeIcon className="pl2"icon={faGithub} /></a>
                        </div>
                    </header>
                    
                    <Popup popupDisplay = { this.state.popupDisplay } setPopupDisplay = { this.setPopupDisplay } activeHero = { this.state.activeHero }/>

                    <Scroll>
                        <CardList heroes = {filteredHeroes} setActiveHero = {this.setActiveHero} />
                    </Scroll>
                </div>
            )
        }
    }
};


export default App;