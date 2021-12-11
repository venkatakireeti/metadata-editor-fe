import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import metadatas from './metadatas';
import user from './user';

// eslint-disable-next-line import/no-anonymous-default-export
export default history => 
combineReducers({
    router: connectRouter(history),
    metadatas,
    user
});