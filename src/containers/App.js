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
            activeHero: 'Superman',
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

    setActiveHero = (hero) => {
        this.setState({activeHero: hero});
        this.setPopupDisplay();
        console.log(hero);
    }

    setPopupDisplay = () => {
        if (this.state.popupDisplay) {
            this.setState({popupDisplay: false});
            console.log('close popup')
        }
        else {
            this.setState({popupDisplay: true})
            console.log('open popup')
        }
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
                <div className="tc ">
                    <header>
                        <h1 className="tc f1 pt4">Hero Friends</h1>
                        <SearchBox searchChange = {this.onSearchChange}/>
                        <div  className="white pa3">
                            <span>Created by Nima Karami </span>
                            <a href="mailto:nkarami.dev@gmail.com" target="_blank" title="email" className="social-link"><FontAwesomeIcon className="pl2"icon={faEnvelope} /></a>
                            <a href="https://www.linkedin.com/in/nima-karami/" target="_blank" title="github" className="social-link"><FontAwesomeIcon className="pl2"icon={faLinkedin} /></a>
                            <a href="https://github.com/nima-karami" target="_blank" title="github" className="social-link"><FontAwesomeIcon className="pl2"icon={faGithub} /></a>
                            
                            {/* Temp button, delete later */}
                            <button onClick={this.setPopupDisplay}>Open</button>
                            
                            
                        </div>
                    </header>
                    
                    <Popup popupDisplay = { this.state.popupDisplay } setPopupDisplay = { this.state.setPopupDisplay } activeHero = { this.state.activeHero }/>

                    <Scroll>
                        <CardList heroes = {filteredHeroes} setActiveHero = {this.setActiveHero} />
                    </Scroll>

                    
                    
                </div>
            )
        }
    }
};


export default App;