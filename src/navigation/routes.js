import { Home, Resume, Bio, SignUp } from "../pages";

const homeUrl = "/";
const resumeUrl = "/resume";
const bioUrl = "/bio";
const signUpUrl = "/signup";

export const pubRoutes = [
  { path: homeUrl, Page: Home, exact: true },
  { path: resumeUrl, Page: Resume, exact: true },
  { path: bioUrl, Page: Bio, exact: true },
  { path: signUpUrl, Page: SignUp, exact: true },
];
