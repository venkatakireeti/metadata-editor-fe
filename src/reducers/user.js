import { GET_USER_SUCCESS } from "../actions/user";

const initialState = {
  user: '',
};

function user(state = initialState, action) {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return {
        user: action.payload,
      };
    default:
      return state;
  }
}

export default user;
