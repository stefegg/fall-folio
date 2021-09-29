import React from "react";
import { Route, Switch } from "react-router-dom";
import { pubRoutes } from "./routes";
import { NavTop, NavSide, ModalSite } from "../components";
import { Wrapper, SideTrack, PageTrack } from "./styles";
import atoms from "../atoms";
import { useRecoilState } from "recoil";

const Navigation = () => {
  const [sideBarWidth, setSideBarWidth] = useRecoilState(atoms.sideBarWidth);

  return (
    <>
      <NavTop />
      <Wrapper>
        <SideTrack sideBarWidth={sideBarWidth}>
          <NavSide />
        </SideTrack>
        <PageTrack>
          <Switch>
            {pubRoutes.map(({ path, Page, exact }) => (
              <Route key={path} path={path} exact={exact}>
                <Page />
              </Route>
            ))}
          </Switch>
        </PageTrack>
      </Wrapper>
      <ModalSite />
    </>
  );
};

export default Navigation;
