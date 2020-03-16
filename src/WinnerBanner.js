import React from 'react';
import './WinnerBanner.css';

function WinnerBanner(props) {
  if (!props.showBanner) return null;
  return (
    <div className="winner-banner">
      Winner!
      <button className="winner-banner__play-again-btn" type="button" onClick={props.onClick}>Play Again?</button>
    </div>
  );
}

export default WinnerBanner;