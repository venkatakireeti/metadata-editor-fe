import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import createStore, { getHistory } from "./store";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
// import CssBaseline from "@material-ui/core/CssBaseline";

async function main() {
  const componentToLoad = <App history={getHistory()} />;
  const store = createStore();
  ReactDOM.render(
    <Provider store={store}>
      {/* <CssBaseline /> */}
      <ConnectedRouter history={getHistory()}>
        {componentToLoad}
      </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
  );
}

if (window === window.top) {
  main();
}
