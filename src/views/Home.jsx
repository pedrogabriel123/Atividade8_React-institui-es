import { Carousel, Container } from 'react-bootstrap';
import '../styles/Home.css';

import img1 from '../assets/escola1.jpeg';
import img2 from '../assets/escola2.jpeg';
import img3 from '../assets/escola3.jpeg';

const Home = () => {
  const imagens = [img1, img2, img3];

  return (
    <Container>
      <h1 className="text-center mt-4">Bem-vindo à Plataforma de Instituições de Ensino</h1>
      <p className="text-center">Aqui você pode explorar e cadastrar instituições de ensino com facilidade.</p>

      {/*Carrossel com imagens estilizadas */}
      <Carousel className="mt-4 custom-carousel">
        {imagens.map((img, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100 custom-carousel-image" src={img} alt={`Escola ${index + 1}`} />
            <Carousel.Caption>
              <h3>Escola {index + 1}</h3>
              <p>Uma das instituições de ensino cadastradas</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Home;
