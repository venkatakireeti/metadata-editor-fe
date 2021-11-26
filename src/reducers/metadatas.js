import { CREATE_METADATA_SUCCESS, DELETE_METADATA_SUCCESS, LIST_METADATA_SUCCESS, UPDATE_METADATA_SUCCESS } from "../actions/metadatas";

const initialState = {
  results: [],
};

function metadatas(state = initialState, action) {
  switch (action.type) {
    case CREATE_METADATA_SUCCESS:
      return {
        results: [...state.results, action.payload],
      };
    case LIST_METADATA_SUCCESS:
      return {
        results: action.payload,
      };
    case UPDATE_METADATA_SUCCESS:
        return state;
    case DELETE_METADATA_SUCCESS:
      return {
        ...state,
        results: state.results.filter((item) => action.payload.id !== item.id)
      }
    default:
      return state;
  }
}

export default metadatas;
