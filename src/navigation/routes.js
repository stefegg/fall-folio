import { Home, Resume, Bio } from "../pages";

const homeUrl = "/";
const resumeUrl = "/resume";
const bioUrl = "/bio";

export const pubRoutes = [
  { path: homeUrl, Page: Home, exact: true },
  { path: resumeUrl, Page: Resume, exact: true },
  { path: bioUrl, Page: Bio, exact: true },
];
