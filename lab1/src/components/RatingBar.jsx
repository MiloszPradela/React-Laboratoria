import React from 'react';
import PropTypes from 'prop-types';

const RatingBar = ({ rate }) => {
  const stars = Array(10).fill(0).map((_, index) => (
    <span key={index} style={{ color: index < rate ? 'gold' : 'gray' }}>
      &#9733;
    </span>
  ));

  return <div>{stars}</div>;
};

RatingBar.propTypes = {
  rate: PropTypes.number.isRequired,
};

export default RatingBar;
