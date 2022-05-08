import React, { useState } from "react";

import * as C from "./style";

import TextField from "@mui/material/TextField";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { registration } from "../../services/registration";
import Btn from "../../components/Button";
import { Link } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const [keyword, setKeyword] = useState({
    password: "",
    showPassword: false,
  });

  const handleChangeForm = async (event) => {
    event.preventDefault();
    const response = await registration({
      email,
      password: keyword.password,
      name,
    });
    console.log(response);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (prop) => (event) => {
    setKeyword({ ...keyword, [prop]: event.target.value });
    console.log(keyword);
  };

  const handleClickShowPassword = () => {
    setKeyword({
      ...keyword,
      showPassword: !keyword.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <C.Container onSubmit={handleChangeForm}>
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
          <Btn name="Registrar" />
        </C.ButtonRegitro>

        <C.BtnBack>
          <Link style={{ textDecoration: "none" }} to="/">
            <Btn name="Voltar" />
          </Link>
        </C.BtnBack>

      </C.Container>
    </>
  );
}

export default Register;
