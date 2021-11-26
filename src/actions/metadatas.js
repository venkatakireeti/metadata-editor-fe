import { createAction } from "redux-api-middleware";

export const CREATE_METADATA = "CREATE_METADATA";
export const CREATE_METADATA_SUCCESS = "CREATE_METADATA_SUCCESS";
export const CREATE_METADATA_FAILURE = "CREATE_METADATA_FAILURE";

export const DELETE_METADATA = "DELETE_METADATA";
export const DELETE_METADATA_SUCCESS = "DELETE_METADATA_SUCCESS";
export const DELETE_METADATA_FAILURE = "DELETE_METADATA_FAILURE";

export const LIST_METADATA = "LIST_METADATA";
export const LIST_METADATA_SUCCESS = "LIST_METADATA_SUCCESS";
export const LIST_METADATA_FAILURE = "LIST_METADATA_FAILURE";

export const UPDATE_METADATA = "UPDATE_METADATA";
export const UPDATE_METADATA_SUCCESS = "UPDATE_METADATA_SUCCESS";
export const UPDATE_METADATA_FAILURE = "UPDATE_METADATA_FAILURE";

const handleResponse = (action, state, res) => {
  return res.json();
};

const handleError = (action, state, res) => {
  console.log(res.json());
};

export const createOne= (data) =>
  createAction({
    endpoint: "http://18.217.55.36:8081/api/metadatas",
    method: "POST",
    body: JSON.stringify({"listName": data.listName}),
    headers: { 'Content-Type': 'application/json' },
    types: [
      { type: CREATE_METADATA },
      {
        type: CREATE_METADATA_SUCCESS,
        payload: (action, state, res) => handleResponse(action, state, res),
      },
      { type: CREATE_METADATA_FAILURE, payload: handleError },
    ],
  });

export const deleteOne = (id) =>
  createAction({
    endpoint: `http://18.217.55.36:8081/api/metadatas/${id}`,
    method: "DELETE",
    types: [
      { type: DELETE_METADATA },
      {
        type: DELETE_METADATA_SUCCESS,
        payload: (action, state, res) => handleResponse(action, state, res),
      },
      { type: DELETE_METADATA_FAILURE, payload: handleError },
    ],
  });

export const listAll = () =>
  createAction({
    endpoint: "http://18.217.55.36:8081/api/metadatas",
    method: "GET",
    types: [
      { type: LIST_METADATA },
      {
        type: LIST_METADATA_SUCCESS,
        payload: (action, state, res) => handleResponse(action, state, res),
      },
      { type: LIST_METADATA_FAILURE, payload: handleError },
    ],
  });

export const updateOne = (data, id) =>
  createAction({
    endpoint: "http://18.217.55.36:8081/api/metadatas/"+id,
    method: "PUT",
    body: JSON.stringify({"listName": data.listName}),
    headers: { 'Content-Type': 'application/json' },
    types: [
      { type: UPDATE_METADATA },
      {
        type: UPDATE_METADATA_SUCCESS,
        payload: (action, state, res) => handleResponse(action, state, res),
      },
      { type: UPDATE_METADATA_FAILURE, payload: handleError },
    ],
  });
