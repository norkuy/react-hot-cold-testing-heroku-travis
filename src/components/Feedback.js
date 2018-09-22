import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';

class Feedback extends Component {
    constructor(props) {
      super(props);
    }

    render() {
     const { guess, correct } = this.props;
     console.log(this.props);
     let msg = '';
      if (guess === correct) {
          msg = 'Correct!';
          setTimeout(() => this.props.correctNumberChosen(), 2000);
      } else if (guess >= correct-5 && guess <= correct+5) {
        msg = 'Hot';
      } else if (guess >= correct-10 && guess <= correct+10) {
        msg = 'Warmer';
      } else if (guess >= correct-15 && guess <= correct+15) {
        msg = 'Luke Warm';
      } else if (guess >= correct || guess <= correct) {
          msg = 'Cold'
      } 
      return (
        <div className={ `${ msg }`.replace(/ /g, '') + ' text-center' }>{msg}</div>
      );
    }
  }
  
  export default Feedback;