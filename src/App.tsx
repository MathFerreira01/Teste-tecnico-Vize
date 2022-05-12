import Login from "./view/Login";
import Registro from "./view/Registro";
import TabelaUsuarios from "./view/TabelaUsuarios";
import { GlobalStyles } from "./styles/GlobalStyles";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App () {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Login />} />
        <Route  path="/registro" element={<Registro/>} />
        <Route  path="/tabela-usuarios" element={<TabelaUsuarios/>} />
      </Routes> 
      <GlobalStyles/>
    </Router>
  );
}

export default App



