import { Button, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createOne } from "../actions/metadatas";

function AddMetadata() {
  const [id, setId] = useState("");
  const [listName, setListName] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    console.log("listName: ", listName);
    const data = {'listName': listName};
    dispatch(createOne(data));
  }
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} style={{ width: 700, margin: 30 }}>
        {/* <Grid item>
          <TextField
            id="outlined-basic"
            label="id"
            variant="outlined"
            value={id}
            onInput={ e=>setId(e.target.value)}
          />
        </Grid> */}
        <Grid item>
          <TextField
            id="outlined-add"
            label="ListName"
            variant="outlined"
            value={listName}
            onInput={ e=>setListName(e.target.value)}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" type="submit">Add</Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default AddMetadata;
