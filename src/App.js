import React from 'react';
import Header from './Header';
import Card from './Card';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: this.createCards(),
    }
  }

  createCards = () => {

    const cards = [];
    const NUM_CARDS = 16;

    for (let i = 0; i < NUM_CARDS; i++) {
      cards.push(<Card key={i} />);
    }

    return cards;
  
  };
  
  render() {
    return (
      <div className="app">
        <Header />
        <div className="card-container">
          {this.state.cards}
        </div>
        <div className="instructions">
          <h2>Welcome to the Memory Game!</h2>
          <p>Rules for gameplay:</p>
          <ol>
            <li>Click a card to reveal the color of the card.</li>
            <li>Click another card, if the colors are the same, the colors will stay revealed. If the colors are different, both cards will return back to a grey color.</li>
            <li>The game is finished when all of the cards have been successfully revealed.</li>
          </ol>
        </div>
      </div>
    );  
  }
  
}

export default App;
