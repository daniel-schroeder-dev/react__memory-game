import React from 'react';
import PropTypes from 'prop-types';
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

WinnerBanner.propTypes = {
  onClick: PropTypes.func.isRequired,
  showBanner: PropTypes.bool.isRequired,
};

export default WinnerBanner;