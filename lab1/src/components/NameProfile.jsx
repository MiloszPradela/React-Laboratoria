import PropTypes from 'prop-types';

const NameProfile = ({ person }) => {
  return (
    <div className="name-profile">
      <h2>{person.name}</h2>
      <p>ID: {person.id}</p>
      <p>Birth Date: {person.birthDate}</p>
      <p>Nationality: {person.nationality}</p>
    </div>
  );
};

NameProfile.propTypes = {
  person: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    birthDate: PropTypes.string.isRequired,
    nationality: PropTypes.string.isRequired,
  }).isRequired
};

export default NameProfile;
