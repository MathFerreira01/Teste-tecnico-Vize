import styled from "styled-components";

export const Container = styled.form`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  span {
    font-size: 0.8rem;
    color: #EC002A;
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
