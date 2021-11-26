import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import { apiMiddleware } from "redux-api-middleware";
import logger from "redux-logger";
import thunk from "redux-thunk";
import createRootReducer from './reducers';

const history = createBrowserHistory();

export const getHistory = () => history;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [
    routerMiddleware(history),
    thunk,
    apiMiddleware,
    logger
];

const store = (preloadedState = {}) => createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares)),
);

export default store;