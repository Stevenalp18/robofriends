import React from "react";
import CardList from "../component/CardList";
import SearchBox from "../component/SearchBox"
import { Component } from "react";
import './app.css';
import Scroll from '../component/Scroll';

class App extends Component {
    constructor(){
        super()
        this.state = {
                robots: [], 
                searchfield: ''
            }   
    }

    componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>{return response.json();})
        .then(users => {this.setState({robots:users})});
    }

    onSearchChange = (event) => {   
        this.setState({searchfield: event.target.value})
        
    }

   render() {
    const {robots, searchfield} = this.state;
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    return !robots.length ? 
    <h1>Loading, Please Wait</h1> :
    (
        <div className="tc">
            <h1 className="f1">Robofriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>    
            <Scroll>
            <CardList robots={filteredRobots}/>
            </Scroll>
        </div>
        );
        };
    }

export default App;