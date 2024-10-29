import FlexContainer from '../components/FlexContainer';
import NameProfile from '../components/NameProfileEditable';
import { data } from '../data/module-data'; 

const Lab3Page = () => {
  return (
    <div className="container">
      <h1>Laboratorium 3</h1>
      <FlexContainer element={NameProfile} data={data} />
    </div>
  );
};

export default Lab3Page;
