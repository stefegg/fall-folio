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
  showSiteModal: atom({
    key: "showSiteModal",
    default: null,
  }),
  showSlideModal: atom({
    key: "showSlideModal",
    default: false,
  }),
};
