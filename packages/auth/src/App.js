import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import SignIn from "./components/Signin";
import SignUp from "./components/Signup";
import { useState } from "react";

export default ({ history, checkSignIn }) => {
  const generateClassName = createGenerateClassName({
    productionPrefix: "ma",
  });

  const [signin, setSignin] = useState(false);

  function onSignIn() {
    setSignin(true);
    checkSignIn(true);
  }
  console.log("log from auth");

  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin">
              <SignIn onSignIn={onSignIn} />
            </Route>
            <Route path="/auth/signup">
              <SignUp onSignIn={onSignIn} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
