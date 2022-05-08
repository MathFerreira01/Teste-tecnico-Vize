import React, { useState } from "react";

import * as S from "./style";

import { Link } from "react-router-dom";
import { auth } from "../../services/auth";

import TextField from "@mui/material/TextField";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import Btn from "../../components/Button";

function Login() {
  const [email, setEmail] = useState("");
  const [keyword, setKeyword] = useState({
    password: "",
    showPassword: false,
  });

  const handleChangeForm = async (event)  => {
    event.preventDefault();
        const response = await auth({ email, password: keyword.password });
        console.log(response);
  }

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

  return (
    <S.Container onSubmit={handleChangeForm}>

      <S.SectionInput>
        <TextField
          style={{ width: "389px" }}
          id="email"
          placeholder="Usuário"
          type="email"
          variant="filled"
          value={email}
          onChange={handleChangeEmail}
        />
      </S.SectionInput>

      <S.SectionInput>
        <FilledInput
          style={{ width: "389px" }}
          id="password"
          placeholder="Senha"
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
      </S.SectionInput>

      <S.ButtonLogin>
        <Btn name="Login"/>
      </S.ButtonLogin>

      <S.ButtonRegister>
        <Link style={{ textDecoration: "none" }} to="/Registro">
          <Button variant="contained">Registrar</Button>
        </Link>
      </S.ButtonRegister>
      
    </S.Container>
  );
}

export default Login;