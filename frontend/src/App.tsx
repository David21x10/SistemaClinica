import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './toast-custom.css';

import GlobalToast from './components/share/GlobalToast';
import NavBar from './components/share/NavBar';
import Home from './components/Home';
import PacientesTable from "./components/Pacientes";
import TerapeutasTable from './components/Terapeuta';
import CitasTable from "./components/Citas";
import Login from './components/Login';
import EncargadosTable from "./components/Encargados";
import DiagnosticosTable from "./components/Diagnosticos";
import ScrollToTop from './components/ScrollToTop';
import ProductosTable from './components/Productos';
import BodegasTable from './components/Bodegas';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <GlobalToast /> 
      
      {location.pathname !== '/' && <NavBar />}

      <main className="main-content" style={{ overflow: 'auto', height: '100%' }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pacientes" element={<PacientesTable />} />
          <Route path="/terapeutas"element={<TerapeutasTable />} />
          <Route path="/citas" element={<CitasTable />} />
          <Route path="/encargados" element={<EncargadosTable />} />
          <Route path="/diagnosticos" element={<DiagnosticosTable />} />
          <Route path="/productos" element={<ProductosTable />} />
          <Route path="/bodega" element={<BodegasTable />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
