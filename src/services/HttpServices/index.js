import fetch from "isomorphic-unfetch";

export default {
  async get(url) {
    let res;
    try {
      res = await fetch(url, {
        method: "GET",
      });
      return res;
    } catch (e) {
      throw Error("An unxpected error occurred", e);
    }
  },
};
