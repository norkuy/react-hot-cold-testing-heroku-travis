import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';

class GuessHistory extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const numbers = this.props.allGuesses.reverse().map(guess => <span className="guesses">{guess}</span>);
        let numberOfGuesses = 0;
        return (
            <div className="text-center">
                <div>
                    Guess #{ this.props.allGuesses.length+1 }
                </div>
                <div className="guessHistory">
                    {numbers}
                </div>
                <div>
                    Wins: {this.props.correct}
                </div>
            </div>
        );   
    }
}

export default GuessHistory;