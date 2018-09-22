import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';

class Guess extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <form onSubmit={ this.props.guessChanged } className="guessBox">
            <input type="number" id="guessInput" />
            <input type="submit" />
            </form>
        );   
    }
}

export default Guess;