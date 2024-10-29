import { useParams } from 'react-router-dom';
import { data as persons } from '../data/module-data';

const Lab2 = () => {
  const { id } = useParams();
  const person = persons.find(p => p.id === Number(id));

  if (!id) {
    return <h1>Brak identyfikatora osoby.</h1>;
  }

  if (!person) {
    return <h1>Nie znaleziono osoby o tym identyfikatorze.</h1>;
  }

  return (
    <div className='container'>
      <h1>Profil Osoby</h1>
      <p>ID: {person.id}</p>
      <p>Imię i nazwisko: {person.name}</p>
      <p>Data urodzenia: {person.birthDate}</p>
      <p>Narodowość: {person.nationality}</p>
    </div>
  );
};

export default Lab2;
