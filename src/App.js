import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Accueil from './Accueil/Accueil';
import Connexion from './Connexion/Connexion';

function App() {
  return (
    <div className="font-custom bg-primary-lowest">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to="/accueil" />} />

          <Route path="/connexion" element={<Connexion />} />

          <Route path="/accueil" element={<Accueil />} />

          {/* <Route path="/affiche:id" element={<Affiche />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
