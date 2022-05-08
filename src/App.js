import Login from "./view/Login";
import Registro from "./view/Registro";
import TabelaUsuarios from "./view/TabelaUsuarios";
import { GlobalStyles } from "./styles/GlobalStyles";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/Registro" element={<Registro />} />
      </Routes> 
      {/* <TabelaUsuarios/> */}
      <GlobalStyles/>
    </Router>
  );
}

export default App;
