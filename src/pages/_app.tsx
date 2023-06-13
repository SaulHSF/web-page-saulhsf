import { useLayoutEffect, useState } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

import { ThemeContext } from "@/contexts/Theme";
import "@/styles/globals.css";
import { getThemeStore, setThemeStore } from "@/stores/Settings";

export default function App({ Component, pageProps }: AppProps) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    console.log("toglle =>", { isDarkMode });
    const newState = !isDarkMode;
    console.log("toglle =>", { newState, isDarkMode });
    setIsDarkMode(newState);
    setThemeStore(newState);
  };

  useLayoutEffect(() => {
    console.log("result ==>", { getTheme: getThemeStore() });
    setIsDarkMode(getThemeStore());
  });

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className={`${isDarkMode ? "dark" : ""}`}>
        <div className={`bg-white dark:bg-black`}>
          <Component className={`bg-white dark:bg-black`} {...pageProps} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
