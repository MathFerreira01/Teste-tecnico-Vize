import React from 'react';

import { Container } from './style';
import Button from "@mui/material/Button";

interface Props {
  name: string
}

function Btn(props:Props) {
  return (
      <Container>
          <Button variant="contained" type="submit">{props.name}</Button>
      </Container>
  );
}

export default Btn;