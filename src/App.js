import React from 'react';
import Header from './Header';
import Card from './Card';
import './App.css';

const cards = [];
const NUM_CARDS = 16;

for (let i = 0; i < NUM_CARDS; i++) {
  cards.push(<Card />);
}

function App() {
  return (
    <div className="app">
      <Header />
      <div className="card-container">
        {cards}
      </div>
    </div>
  );
}

export default App;
