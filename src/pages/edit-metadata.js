import { Button, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { updateOne } from "../actions/metadatas";
import { useHistory } from "react-router";

function EditMetadata() {
  const params = useParams();
  const [listName, setListName] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const metadata = useSelector((state) =>
    state.metadatas.results.filter((e) => e.id === params.id)
  );

  function handleSubmit(event) {
    event.preventDefault();
    console.log("listName: ", listName);
    const data = { listName: listName };
    dispatch(updateOne(data, params.id));
    history.push("/");
  }

  useEffect(() => {
    setListName(metadata[0].ListName);
  }, metadata);
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} style={{ width: 700, margin: 30 }}>
        <Grid item>
          <TextField
            id="outlined-basic"
            label="id"
            variant="outlined"
            value={params.id}
            disabled
          />
        </Grid>
        <Grid item>
          <TextField
            id="outlined-add"
            label="ListName"
            variant="outlined"
            value={listName}
            onInput={(e) => setListName(e.target.value)}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" type="submit">
            Update
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default EditMetadata;
