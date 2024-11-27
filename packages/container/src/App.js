import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MarketingApp from "./components/MarketingApp";
import AuthApp from "./components/AuthApp";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import { useState } from "react";

export default () => {
  const generateClassName = createGenerateClassName({
    productionPrefix: "co",
  });
  const [signin, setSignin] = useState(false);

  function onSignOut() {
    setSignin(false);
  }

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header onSignOut={onSignOut} signedIn={signin} />
          <Switch>
            <Route path="/auth">
              <AuthApp setSignin={setSignin} />
            </Route>
            <Route path="/">
              <MarketingApp />
            </Route>
          </Switch>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
