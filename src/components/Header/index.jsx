import React from "react";
import { Link } from "react-router-dom";
import * as M from "./style";

import Button from "@mui/material/Button";

function Header() {
  const clearStorage = () => window.localStorage.clear();

  return (
    <M.Container>
      {<p>Company Logo</p>}
      <M.Navigation>
        <Link to="/">
          <Button onClick={clearStorage} variant="contained">
            Logout
          </Button>
        </Link>
      </M.Navigation>
    </M.Container>
  );
}

export default Header;
