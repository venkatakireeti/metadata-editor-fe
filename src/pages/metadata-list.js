import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteOne, listAll } from "../actions/metadatas";
import { getUserInfo } from "../actions/user";
import { useHistory } from "react-router";
import {
  useLocation
} from "react-router-dom";

export default function MetadataList() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { metadatas } = useSelector((state) => ({
    metadatas:
      state.metadatas.results.length === 0 ? [] : state.metadatas.results,
  }));
  const { user } = useSelector((state) => ({
    user:
      state.user.user,
  }));
  useEffect(() => {
    console.log(location);
    let searchParams = new URLSearchParams(location.search);
    console.log(searchParams.get("code"));
    dispatch(getUserInfo(searchParams.get("code")));
    dispatch(listAll());
  }, [location]);

  const handleDelete = (id) => {
    dispatch(deleteOne(id));
    // console.log('onClick', id);
  };

  const handleUpdate = (id) => {
    history.push("/edit/"+id)
  };

  return (
    <TableContainer component={Paper} style={{ width: 700, margin: 30 }}>
      <Table
        sx={{ minWidth: 650 }}
        style={{ width: 700 }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>ListName</TableCell>
            <TableCell>Action</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {metadatas.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>{row.ListName}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  onClick={() => handleDelete(row.id)}
                >
                  Delete
                </Button>
              </TableCell>
              <TableCell>
              <Button
                  variant="contained"
                  onClick={() => handleUpdate(row.id)}
                >
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
