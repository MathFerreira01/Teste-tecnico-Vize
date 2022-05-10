import styled from "styled-components";

export const Tabela = styled.table`
  width: 65%;
  margin: auto;
  border-collapse: collapse;

  th,
  td {
    padding: 0.8rem;
    text-align: left;
    color: #00639c;
    border: 1px solid #cce5ff;
  }
`;

export const ButtonLogout = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  padding: 1.5rem;

  Button {
    width: 15rem;
    height: 3rem;
    border-radius: 100px;
  }
`;

export const TabelaTitulo = styled.tr`
  background: #cce5ff;
  border: 1px solid #fff;

  #title-id {
    text-align: center;
    border: 1px solid #fff;
  }
`;

export const TabelaUsuarios = styled.tr`

  #user-id {
    text-align: center;
  }
`;
