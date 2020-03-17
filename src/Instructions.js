import React from 'react';
import './Instructions.css';

function Instructions(props) {
  return (
    <div className="instructions">
      <h2>Welcome to the Memory Game!</h2>
      <p>Rules for gameplay:</p>
      <ol className="instructions__gameplay-list">
        <li>Click a card to reveal the color of the card.</li>
        <li>Click another card, if the colors are the same, the colors will stay revealed. If the colors are different, both cards will return back to a grey color.</li>
        <li>The game is finished when all of the cards have been successfully revealed.</li>
      </ol>
    </div>
  );
}

export default Instructions;