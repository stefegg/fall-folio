import React from "react";
import { Route, Switch } from "react-router-dom";
import { pubRoutes } from "./routes";
import { NavTop } from "../components";

const Navigation = (props) => {
  return (
    <>
      <NavTop />
      <Switch>
        {pubRoutes.map(({ path, Page, exact }) => (
          <Route key={path} path={path} exact={exact}>
            <Page />
          </Route>
        ))}
      </Switch>
    </>
  );
};

export default Navigation;
