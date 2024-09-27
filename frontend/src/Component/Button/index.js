import React from "react";
import Button from "@mui/material/Button";

export default function DisableElevation(props) {
  return (
    <Button
      variant="contained"
      color="error"
      disableElevation
      onClick={props.handleClick}
    >
      {props.isLogin ? 'Dang xuat' : 'Dang nhap'}
    </Button>
  );
}
