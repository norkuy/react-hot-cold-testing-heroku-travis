import React, { Component } from 'react';
import Guess from './Guess';
import Feedback from './Feedback';
import GuessHistory from './GuessHistory';
// import logo from './logo.svg';
import '../App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      guess: 0,
      correctNumber: this.getNewNumber(),
      allGuesses: [],
      correct: 0
    }
    this.guessChanged = this.guessChanged.bind(this);
  }
  getNewNumber() {
    return Math.floor((Math.random() * 100) + 1);
  }
  correctNumberChosen() {
    this.getNewNumber();
    this.setState(() => ({ guess: 0, 
                           correctNumber: this.getNewNumber(),
                           allGuesses: [], correct: ++this.state.correct }))
  }
  guessChanged(evt) {
    evt.preventDefault();
    const input = document.getElementById('guessInput');
    const guess = parseInt(input.value);
    
    if (this.state.allGuesses.includes(guess)) {
      return alert('You\'ve already guessed that number.');
    }

    if (guess > 100 || guess < 0) {
      return alert('Guess must be between 0 and 100.');
    }

    this.state.allGuesses.push(guess);
    this.setState(() => ({ guess, allGuesses: this.state.allGuesses }));
    input.value = '';
  }
  render() {
    const { guess, correctNumber, correct } = this.state;

    return (
      <div className="guessApp">
        <Guess guessChanged={ this.guessChanged } />
        <Feedback guess={ guess }
                  correct={correctNumber}
                  correctNumberChosen={ () => this.correctNumberChosen() } />
        <GuessHistory allGuesses={this.state.allGuesses} correct={correct} />
      </div>
    );
  }
}

export default App;