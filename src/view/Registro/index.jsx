import React, { useState } from "react";

import * as C from "./style";

import TextField from "@mui/material/TextField";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";

import { registration } from "../../services/registration";
import Btn from "../../components/Button";
import { Link } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [messageError, setMessageError] = useState("");
  const [showMessageError, setShowMessageError] = useState(false);

  const [keyword, setKeyword] = useState({
    password: "",
    showPassword: false,
  });

  const handleChangeSubmit = async (event) => {
    event.preventDefault();

    const response = await registration({
      email,
      password: keyword.password,
      name,
    });

    if (response.code === 1) {
      setShowMessageError(true);
      setMessageError(response.message);
    }

    if (response.code === 0) {
      window.alert("Cadastro feito com sucesso");
      window.location.href = "/";
    }
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
    setShowMessageError(false);
  };

  const handleChangePassword = (prop) => (event) => {
    setKeyword({ ...keyword, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setKeyword({
      ...keyword,
      showPassword: !keyword.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleChangeName = (event) => setName(event.target.value);

  return (
    <C.Container onSubmit={handleChangeSubmit}>
      {showMessageError ? <span>* {messageError}</span> : null}
      <C.SectionInput>
        <TextField
          style={{ width: "389px" }}
          id="email"
          placeholder="Usuário"
          type="email"
          variant="filled"
          value={email}
          onChange={handleChangeEmail}
        />
      </C.SectionInput>

      <C.SectionInput>
        <FilledInput
          style={{ width: "389px" }}
          id="password"
          placeholder="Senha"
          variant="filled"
          type={keyword.showPassword ? "text" : "password"}
          value={keyword.password}
          inputProps={{ minLength: 6 }}
          onChange={handleChangePassword("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {keyword.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </C.SectionInput>

      <C.SectionInput>
        <TextField
          style={{ width: "389px" }}
          id="name"
          placeholder="Nome"
          type="name"
          variant="filled"
          value={name}
          onChange={handleChangeName}
        />
      </C.SectionInput>

      <C.ButtonRegitro>
        <Btn name="Registrar"/>
      </C.ButtonRegitro>

      <C.ButtonLogout>
        <Link to="/">
          <Button variant="contained">Voltar</Button>
        </Link>
      </C.ButtonLogout>
    </C.Container>
  );
}

export default Register;
