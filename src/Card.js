import React from 'react';
import './Card.css';

function Card(props) {

  function handleClick(e) {
    props.handleClick(props.id);
  }

  return (
    <div className="card" onClick={handleClick} style={{ backgroundColor: props.color }} />
  );
}

export default Card;