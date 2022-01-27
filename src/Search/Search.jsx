import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export function Search(props) {
  console.log(props.pincode);
  const [error, setError] = useState(false);

  function pinCodeHandler(value) {
    if (value.length > 6) {
      setError(true);
    } else {
      setError(false);
      props.pinCodeHandler(value);
    }
  }

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
    >
      <TextField
        error={error}
        label="Pincode"
        id="outlined-size-small"
        size="small"
        onChange={(event) => pinCodeHandler(event.target.value)}
        helperText={error && "enter 6 digit pincode"}
      />
      <Button
        disabled={error || props.pincode.toString().length < 6}
        variant="contained"
        style={{ marginLeft: "10px", height: "40px" }}
        onClick={() => props.searchHandler()}
      >
        Search
      </Button>
    </div>
  );
}
