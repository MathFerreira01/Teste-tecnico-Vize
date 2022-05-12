import React, { useState, useEffect } from "react";
import { usersTable } from "../../services/usersTable";

import * as P from "./style";

import Header from "../../components/Header";
import Loading from "../../components/Loading";

interface State {
  token: string;
}

function TabelaUsuarios() {
  const [token, setToken] = useState();
  const [users, setUsers] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);

  const handleChangeSubmit = async (token: State) => {
    const response = await usersTable(token);

    if (response.data) {
      setUsers(response.data);
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userData") as string);
    setToken(user.Token);
    setRemoveLoading(true);

    if (token) {
      handleChangeSubmit(token);
    }
  }, [token]);

  return (
    <>
      {!removeLoading && <Loading />}

      <Header />

      <P.Tabela>
        <thead>
          <P.TabelaTitulo>
            <th id="title-id">ID</th>
            <th>Nome</th>
          </P.TabelaTitulo>

          {users.map((user: { id: string; name: string }) => (
            <P.TabelaUsuarios key={user?.id}>
              <td id="user-id">{user?.id}</td>
              <td>{user?.name}</td>
            </P.TabelaUsuarios>
          ))}
        </thead>
      </P.Tabela>
    </>
  );
}

export default TabelaUsuarios;
