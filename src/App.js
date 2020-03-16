import React from 'react';
import Header from './Header';
import Card from './Card';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.NUM_CARDS = 16;
    this.colors = this.createColors();
    this.numClicks = 0;
    this.matched = false;
    this.state = {
      cards: this.createCards(),
      lastClickedCardId: null,
    };
  }

  createColors = () => {

    let basicColors = [
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'purple',
      'pink',
      'brown',
    ];

    const colors = [];

    const getRandomColorIndex = () => Math.floor(Math.random() * basicColors.length);
    
    for (let i = 1; i <= this.NUM_CARDS; i++) {
      let color = basicColors[getRandomColorIndex()];
      if (colors.includes(color)) {
        basicColors = basicColors.filter(basicColor => basicColor !== color);
      }
      colors.push(color);
    }

    return colors;

  };

  createCards = () => {

    return (this.colors.map((color, i) => (
      <Card key={i} handleClick={this.handleClick} id={i} color={color}/>
    )));

  };

  handleClick = id => {
    this.numClicks++;
    this.setState(state => {

      state.cards[id] = <Card key={id} handleClick={this.handleClick} id={id} color={this.colors[id]} showColor={true} />;

      if (state.lastClickedCardId === null) {
        state.lastClickedCardId = id;
        return state;
      }

      if (this.colors[id] === this.colors[state.lastClickedCardId]) {
        this.matched = true;
      } 

      return state;
    });

    if (this.numClicks > 1) {
      this.checkForMatchedCards(id);
    }
  };

  checkForMatchedCards = id => {
    
    this.numClicks = 0;

    setTimeout(() => {

      this.setState(state => {

        if (this.matched) {
          state.lastClickedCardId = null;
          this.matched = false;
          return state;
        }

        state.cards[id] = <Card key={id} handleClick={this.handleClick} id={id} color={this.colors[id]} showColor={false} />;
      
        state.cards[state.lastClickedCardId] = <Card key={state.lastClickedCardId} handleClick={this.handleClick} id={state.lastClickedCardId} color={this.colors[state.lastClickedCardId]} showColor={false} />;

        state.lastClickedCardId = null;

        return state;
      
      });
    }, 2000);
    
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
