import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import createStore, { getHistory } from "./store";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
// import CssBaseline from "@material-ui/core/CssBaseline";

async function main() {
  const response = await fetch("http://ec2-18-217-55-36.us-east-2.compute.amazonaws.com:8081/api/metadatas/login/url");
  const url = await response.text();
  console.log(url);
  const componentToLoad = <App url={url} history={getHistory()} />;
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
