const SCHEME_THEME = "SCHEME_THEME";

export const getThemeStore = () => {
  try {
    console.log("gg ==>", {
      trans: localStorage.getItem(SCHEME_THEME) === "true" ? true : false,
      local: localStorage.getItem(SCHEME_THEME),
    });
    return localStorage.getItem(SCHEME_THEME) === "true" ? true : false;
  } catch (err) {
    console.log("getThemeStore() ==> err", { err });
    return true;
  }
};

export const setThemeStore = (val: boolean) => {
  try {
    localStorage.setItem(SCHEME_THEME, `${val}`);
  } catch (err) {
    return false;
  }
};

export const removeThemeStore = () => {
  try {
    localStorage.removeItem(SCHEME_THEME);
  } catch (err) {
    return undefined;
  }
};
