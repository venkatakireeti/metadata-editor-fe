import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import createStore, { getHistory } from "./store";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import * as queryString from 'query-string';

async function main() {
  const urlParams = queryString.parse(window.location.search);
  const response = await fetch("http://ec2-18-217-55-36.us-east-2.compute.amazonaws.com:8081/api/metadatas/login/url");
  const url = await response.text();
  let user = undefined;
  if (urlParams.error) {
    console.log(`An error occurred: ${urlParams.error}`);
  } else {
    console.log(`The code is: ${urlParams.code}`);
    if(urlParams.code) {
    const response = await fetch("http://ec2-18-217-55-36.us-east-2.compute.amazonaws.com:8081/api/metadatas/login/code?code="+urlParams.code);
    const data = await response.json();
    console.log(data);
    user = data.user.name;
    localStorage.setItem("token", data.accessToken);
    localStorage.setItem("user", data.user);
    }
  }
  console.log(url);
  const componentToLoad = <App url={url} user ={user} history={getHistory()} />;
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
