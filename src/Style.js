import { CatHeader } from "./components/NavSide/styles";
import plusIcon from "./icons/plus.svg";
import settingsIcon from "./icons/setting.svg";

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
  peri: "#90A9B7",
};

const ICONS = {
  plusIcon,
  settingsIcon,
};

export const darkTheme = {
  primaryBg: "#363636",
  secondaryBg: "#33435B",
  text: "#CCA43B",
  secondaryText: "white",
  border: "#49516F",
  filter:
    "invert(61%) sepia(52%) saturate(485%) hue-rotate(6deg) brightness(96%) contrast(98%)",
  colors: { ...COLORS },
  icons: {
    ...ICONS,
  },
};

export const blueTheme = {
  primaryBg: "#90A9B7",
  secondaryBg: "#4F7CAC",
  text: "black",
  secondaryText: "#CCA43B",
  border: "#363636",
  filter:
    "invert(61%) sepia(52%) saturate(485%) hue-rotate(6deg) brightness(96%) contrast(98%)",
  colors: { ...COLORS },

  icons: {
    ...ICONS,
  },
};
