import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inicio from './views/Inicio';
import Nosotros from './views/Nosotros';
import Contacto from './views/Contacto';
import Galeria from './views/Galeria';
import Api from './views/Api';

export default function App() {
  return (
    <Router>
      {/* Barra de navegación */}
      <nav style={{ padding: '10px', background: '#eee' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Inicio</Link>
        <Link to="/nosotros" style={{ marginRight: '10px' }}>Nosotros</Link>
        <Link to="/contacto" style={{ marginRight: '10px' }}>Contacto</Link>
        <Link to="/galeria" style={{ marginRight: '10px' }}>Galeria</Link>
        <Link to="/api">API</Link>
      </nav>

      {/* Contenedor de las vistas dinámicas */}
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/api" element={<Api />} />
        </Routes>
      </main>
    </Router>
  );
}
