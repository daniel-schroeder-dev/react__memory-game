import React from 'react';
import './Card.css';

function Card(props) {

  function handleClick(e) {
    props.handleClick(props.id);
  }

  const style = {
    backgroundColor: props.showColor || props.matched ? props.color : 'grey',
  };

  return (
    <div className="card" onClick={handleClick} style={style} />
  );
}

export default Card;