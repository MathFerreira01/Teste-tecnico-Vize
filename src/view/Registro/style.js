import styled from "styled-components";
import Btn from "../../components/Button";

export const Container = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  position: relative;
  top: 17.6rem;

  span {
    font-size: 0.8rem;
    color: red;
  }
`;

export const SectionInput = styled.section`
  padding: 10px;
`;

export const ButtonRegitro = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1em;

  Button {
    width: 20rem;
    height: 3rem;
    border-radius: 100px;

    background: #00639c;
  }
`;

