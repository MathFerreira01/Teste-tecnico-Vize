import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { usersTable } from "../../services/usersTable";

import Button from "@mui/material/Button";

import * as P from "./style";

function TabelaUsuarios() {
  const [token, setToken] = useState();
  const [users, setUsers] = useState([]);

  const handleChangeSubmit = async (token) => {
    const response = await usersTable(token);

    if (response.data) {
      setUsers(response.data);
    }
  };

  const clearStorage = () => window.localStorage.clear();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userData"));
    setToken(user.Token);

    if (token) {
      handleChangeSubmit(token);
    }
  }, [token]);

  return (
    <>
      <P.ButtonLogout>
        <Link to="/">

          <Button variant="contained" onClick={clearStorage}>
            Logout
          </Button>
          
        </Link>
      </P.ButtonLogout>

      <P.Tabela>
        <thead>

          <P.TabelaTitulo>
            <th id="title-id">ID</th>
            <th>Nome</th>
          </P.TabelaTitulo>

          {users.map((user) => (
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
