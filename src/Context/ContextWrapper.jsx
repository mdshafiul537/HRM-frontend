/* eslint-disable react/prop-types */
import React from "react";
import ThemeProvider from "./ThemeProvider";
import AuthProvider from "./AuthProvider";

const ContextWrapper = ({ children, ...props }) => {
  return (
    <React.Fragment {...props}>
      <AuthProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </AuthProvider>
    </React.Fragment>
  );
};

export default ContextWrapper;
