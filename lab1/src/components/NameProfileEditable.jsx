import React from 'react';
import PropTypes from 'prop-types';

const RatingBar = ({ rate, onRate }) => {
  const stars = Array(10).fill(0).map((_, index) => (
    <span
      key={index}
      onClick={() => onRate(index + 1)} 
      style={{ color: index < rate ? 'gold' : 'gray', cursor: 'pointer' }} 
    >
      &#9733;
    </span>
  ));

  return <div>{stars}</div>;
};

const NameProfileEditable = ({ person, dispatch }) => {
  const handleRate = (newRating) => {
    dispatch({
      type: 'rate',
      id: person.id,
      newRating: newRating > 10 ? 0 : newRating 
    });
  };

  const handleEdit = () => {
    dispatch({
      type: 'edit',
      id: person.id 
    });
  };

  const handleDelete = () => {
    dispatch({
      type: 'delete',
      id: person.id 
    });
  };

  return (
    <div className="name-profile">
      <h2>{person.name}</h2>
      <p>ID: {person.id}</p>
      <p>Birth Date: {person.birthDate}</p>
      <p>Nationality: {person.nationality}</p>
      <p>Rating: {person.rating}/10</p>
      
      <RatingBar rate={person.rating} onRate={handleRate} />

      <div className="button-group">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

NameProfileEditable.propTypes = {
  person: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    birthDate: PropTypes.string,
    nationality: PropTypes.string,
    rating: PropTypes.number.isRequired
  }).isRequired,
  dispatch: PropTypes.func.isRequired 
};

export default NameProfileEditable;
