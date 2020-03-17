import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

function Card(props) {

  function handleClick(e) {
    if (!props.handleClick) return;
    props.handleClick(props.id);
  }

  const style = {
    backgroundColor: props.showColor || props.matched ? props.color : 'grey',
  };

  return (
    <div className="card" onClick={handleClick} style={style} />
  );
}

Card.propTypes = {
  color: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  handleClick: PropTypes.func,
  showColor: PropTypes.bool,
};

export default Card;