import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Nosotros from './pages/Nosotros';
import Salir from './pages/Salir';
import Usuario from './pages/Usuario';
import Pedidos from './pages/Pedidos';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/usuario" element={<Usuario />} />
          <Route path="/salir" element={<Salir />} />
        </Routes>
      </div>
    </>
  )
}

export default App
