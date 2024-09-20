/* eslint-disable react/prop-types */
import React from "react";
import ThemeProvider from "./ThemeProvider";

const ContextWrapper = ({ children, ...props }) => {
  return (
    <React.Fragment {...props}>
      <ThemeProvider>{children}</ThemeProvider>
    </React.Fragment>
  );
};

export default ContextWrapper;
