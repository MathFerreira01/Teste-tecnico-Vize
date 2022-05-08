import React from 'react';

import { Container } from './style';
import Button from "@mui/material/Button";

function Btn(props) {
  return (
      <Container>
          <Button variant="contained" type="submit">{props.name}</Button>
      </Container>
  );
}

export default Btn;