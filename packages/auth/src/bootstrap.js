import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { createMemoryHistory, createBrowserHistory } from "history";
import { useState } from "react";

// Mount function to start up the app
const mount = (el, { onNavigate, defaultHistory, checkSignIn }) => {
  const history = defaultHistory || createMemoryHistory();
  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} checkSignIn={checkSignIn} />, el);
  return {
    onNavigate: ({ pathname: nextPathName }) => {
      if (history.location.pathname !== nextPathName) {
        history.push(nextPathName);
      }
    },
  };
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_auth-dev-root");

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

// We are running through container
// and we should export the mount function
export { mount };
