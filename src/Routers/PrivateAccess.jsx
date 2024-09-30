import React, { useContext } from "react";

import { useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import Loading from "../Utils/Loading";
import { isEmptyOrNull } from "../../utils/helper";

const PrivateAccess = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);

  const location = useLocation();
  if (isLoading) {
    return <Loading isLoading={isLoading} />;
  }

  if (!isEmptyOrNull(user)) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location.pathname }} />;
};

export default PrivateAccess;
