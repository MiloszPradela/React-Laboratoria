import React, { useEffect, useState } from 'react';
import NameProfile from '../components/NameProfile';
import '../App.css';
import { data } from '../data/module-data';

const Lab1 = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    setPeople(data);
  }, []);

  return (
    <div className='container'>
      <h1>Person Profiles</h1>
      <div className='container-people'>
        {people.map((person) => (
          <NameProfile key={person.id} person={person} />
        ))}
      </div>
    </div>
  );
};

export default Lab1;
