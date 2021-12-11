import { createAction } from "redux-api-middleware";

export const GET_USER_INFO = "GET_USER_INFO";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILURE = "GET_USER_FAILURE";


const handleResponse = (action, state, res) => {
  return res.json();
};

const handleError = (action, state, res) => {
  console.log(res.json());
};

export const getUserInfo= (code) =>
  createAction({
    endpoint: "http://18.217.55.36:8081/api/metadatas/login/code",
    method: "GET",
    types: [
      { type: GET_USER_INFO },
      {
        type: GET_USER_SUCCESS,
        payload: (action, state, res) => handleResponse(action, state, res),
      },
      { type: GET_USER_FAILURE, payload: handleError },
    ],
  });
