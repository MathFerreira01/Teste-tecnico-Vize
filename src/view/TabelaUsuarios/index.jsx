import React, {useState, useEffect} from "react";
import api from '../../services/api'

import * as P from "./style";

function TabelaUsuarios() {
  const [user, setUser] = useState();

  useEffect(() => {
    api
      .get("/api/users?page=1")
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <P.Tabela>
      <thead>
        <P.TabelaTitulo>
          <th>ID</th>
          <th>Nome</th>
        </P.TabelaTitulo>

        <P.TabelaUsuarios>
          <td>{user?.id}</td>
          <td>{user?.name}</td>
        </P.TabelaUsuarios>

        <P.TabelaUsuarios>
          <td>1</td>
          <td>User 1</td>
        </P.TabelaUsuarios>

        <P.TabelaUsuarios>
          <td>1</td>
          <td>User 1</td>
        </P.TabelaUsuarios>

        <P.TabelaUsuarios>
          <td>1</td>
          <td>User 1</td>
        </P.TabelaUsuarios>
      </thead>
    </P.Tabela>
  );
}

export default TabelaUsuarios;
