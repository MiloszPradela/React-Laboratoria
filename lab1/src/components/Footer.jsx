import Container from 'react-bootstrap/Container';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <Container>
      <div className="d-flex justify-content-between align-items-center">
        <img src='/wsei.png' alt='WSEI' width={'200px'}></img>
        <div>milosz.pradela@microsoft.wsei.edu.pl</div>
      </div>
      </Container>
    </footer>
  );
};

export default Footer;
