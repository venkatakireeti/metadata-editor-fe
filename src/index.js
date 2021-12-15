import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import createStore, { getHistory } from "./store";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import * as queryString from 'query-string';

async function main() {
  const accessToken = localStorage.getItem("token");
  let componentToLoad = <App history={getHistory()} />
  console.log(accessToken);
  if(!accessToken) {
    const urlParams = queryString.parse(window.location.search);
    if(urlParams.code) {
      const response = await fetch("http://ec2-18-217-55-36.us-east-2.compute.amazonaws.com:8081/api/metadatas/login/code?code="+urlParams.code);
      const data = await response.json();
      console.log(data);
      localStorage.setItem("token", data.accessToken);
    } else {
      const response = await fetch("http://ec2-18-217-55-36.us-east-2.compute.amazonaws.com:8081/api/metadatas/login/url");
      const url = await response.text();
      console.log(url);
      componentToLoad = <App url={url} history={getHistory()} />;
    }
  } else {
    const response = await fetch("http://ec2-18-217-55-36.us-east-2.compute.amazonaws.com:8081/api/metadatas/user",{
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'x-access-token': accessToken
      }
    })
    const data = await response.json();
    console.log(data);
    localStorage.setItem("user", data.user);
    const userName = data.user.name;
    componentToLoad = <App user={userName} history={getHistory()} />;
  }
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
