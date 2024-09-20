/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react";
import { Button, ConfigProvider, theme, Space } from "antd";

export const ThemeContext = createContext({});
const { defaultAlgorithm, darkAlgorithm } = theme;
const ThemeProvider = ({ children, ...props }) => {
  const [isDark, setIsDark] = useState(false);

  const onThemeChange = () => {
    console.log("Mode IsDark  ", isDark);
    setIsDark(!isDark);
  };

  return (
    <React.Fragment {...props}>
      <ThemeContext.Provider value={{ isDark, onThemeChange }}>
        <ConfigProvider
          theme={{ algorithm: isDark ? darkAlgorithm : defaultAlgorithm }}
        >
          {children}
        </ConfigProvider>
      </ThemeContext.Provider>
    </React.Fragment>
  );
};

export default ThemeProvider;