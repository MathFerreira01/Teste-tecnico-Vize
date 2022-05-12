import React, { ChangeEvent, useState } from "react";

import * as S from "./style";

import Btn from "../../components/Button";

import { Link } from "react-router-dom";
import { auth } from "../../services/auth";

import TextField from "@mui/material/TextField";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";

interface IPassword {
  password: string;
  showPassword:boolean;
}

function Login() {
  const [email, setEmail] = useState<string>("");
  const [messageError, setMessageError] = useState<string>("");
  const [showMessageError, setShowMessageError] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<IPassword>({
    password: "",
    showPassword: false,
  });

  const handleChangeSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const response = await auth({ email, password: keyword.password });

    if (response.code === 1) {
      setShowMessageError(true);
      setMessageError(response.message);
    }

    if (response.code === 0) {
      localStorage.setItem("userData", JSON.stringify(response.data));
      window.location.href = "/tabela-usuarios";
    }
  };

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangePassword =
    (prop: keyof IPassword) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setKeyword({ ...keyword, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setKeyword({
      ...keyword,
      showPassword: !keyword.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => event.preventDefault();

  return (
    <S.Container onSubmit={handleChangeSubmit}>
      {showMessageError ? <span>* {messageError}</span> : null}

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
      </S.SectionInput>

      <S.ButtonLogin>
        <Btn name="Login" />
      </S.ButtonLogin>

      <S.ButtonRegister>
        <Link to="/registro">
          <Button variant="contained">Registrar</Button>
        </Link>
      </S.ButtonRegister>
    </S.Container>
  );
}

export default Login;
