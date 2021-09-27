import { Home, Resume } from "../pages";

const homeUrl = "/";
const resumeUrl = "/resume";

export const pubRoutes = [
  { path: homeUrl, Page: Home, exact: true },
  { path: resumeUrl, Page: Resume, exact: true },
];
