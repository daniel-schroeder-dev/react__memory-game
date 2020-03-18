import React from 'react';
import Header from './Header';
import Card from './Card';
import WinnerBanner from './WinnerBanner';
import Instructions from './Instructions';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.NUM_CARDS = 16;
    this.NUM_ROUNDS = this.NUM_CARDS / 2;
    this.colors = this.createColorsArray();
    this.lastClickedCardId = null;
    this.state = {
      cards: this.createCards(),
    };
  }

  createColorsArray = () => {

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

    this.setState((state, props) => {
      
      const cards = [...state.cards];

      cards[id] = (
        <Card 
          key={id} 
          handleClick={null} 
          id={id} 
          color={this.colors[id]} 
          showColor={true} 
        />
      );

      return { cards };

    });

    if (this.colors[id] === this.colors[this.lastClickedCardId]) {
      this.lastClickedCardId = null;
      this.NUM_ROUNDS--;
      return;
    }

    this.lastClickedCardId = this.lastClickedCardId === null ? id : this.lastClickedCardId;

    if (this.lastClickedCardId !== id) {
      this.hideUnmatchedCards(id);
    }
  
  };

  hideUnmatchedCards = id => {

    setTimeout(() => {
      
      this.setState((state, props) => {

        const cards = [...state.cards];

        cards[id] = (
          <Card 
            key={id} 
            handleClick={this.handleClick} 
            id={id} 
            color={this.colors[id]} 
            showColor={false} 
          />
        );
      
        cards[this.lastClickedCardId] = (
          <Card 
            key={this.lastClickedCardId} 
            handleClick={this.handleClick} 
            id={this.lastClickedCardId} 
            color={this.colors[this.lastClickedCardId]} 
            showColor={false} 
          />
        );

        this.lastClickedCardId = null;

        return { cards };
      
      });
    }, 300);
    
  };

  initNewGame = () => {
    this.colors = this.createColorsArray();
    this.NUM_ROUNDS = this.NUM_CARDS / 2;
    this.lastClickedCardId = null;
    this.setState({
      cards: this.createCards(),
    });
  };
  
  render() {
    return (
      <div>
        {!this.NUM_ROUNDS ? <div className="grey-out" /> : null}
        <div className="app">
          <WinnerBanner 
            onClick={this.initNewGame} 
            showBanner={!this.NUM_ROUNDS} 
          />
          <Header onClick={this.initNewGame} />
          <div className="card-container">
            {this.state.cards}
          </div>
          <Instructions />
        </div>
      </div>
    );  
  }
  
}

export default App;
