import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  position: relative;
  top: 20%;

  span {
    font-size: 0.8rem;
    color: red;
  }
`;

export const SectionInput = styled.section`
  padding: 10px;
`;

export const ButtonLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1em;

  Button {
    width: 20rem;
    height: 3rem;
    border-radius: 100px;
    text-decoration: none;
    background: #00639c;
  }
`;

export const ButtonRegister = styled(ButtonLogin)`
  margin-top: 2.4em;

  Button {
    width: 16rem;
    height: 3rem;
  }
`;
