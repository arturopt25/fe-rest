import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Bienvenido a Nuestro Restaurante</h1>
        <p>La mejor comida, entregada en tu puerta.</p>
        <Link to="/menu" className="cta-button">
          ¡Haz tu pedido ya!
        </Link>
      </div>
    </div>
  );
};

export default Home;
