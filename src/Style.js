import plusIcon from "./icons/plus.svg";
import settingsIcon from "./icons/setting.svg";
import atoms from "./atoms";
import { useRecoilState } from "recoil";

const COLORS = {
  jet: "#363636",
  charcoal: "#33435B",
  gold: "#CCA43B",
  plat: "#E5E5E5",
  white: "#FFFFFF",
  wildBlue: "#8EA4D2",
  glauc: "#6279B8",
  indy: "#49516F",
  bender: "#496F5D",
  shamrock: "#4C9F70",
  ainge: "#FF5400",
  steel: "#4F7CAC",
};

const DARK_COLORS = {
  primary_bg: "#363636",
  secondary_bg: "#33435B",
  text: "#CCA43B",
  border: "#49516F",
};

const BLUE_COLORS = {
  primary_bg: "#90A9B7",
  secondary_bg: "#4F7CAC",
  text: "black",
  secondary_text: "#CCA43B",
  border: "#363636",
};

const ICONS = {
  plusIcon,
  settingsIcon,
};

export default {
  colors: COLORS,
  blueColors: BLUE_COLORS,
  darkColors: DARK_COLORS,
  icons: ICONS,
};
