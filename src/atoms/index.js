import { atom } from "recoil";

export default {
  sideBarWidth: atom({
    key: "sidebarWidth",
    default: "200px",
  }),
  displayComponent: atom({
    key: "displayComponent",
    default: null,
  }),
};
