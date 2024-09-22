import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ContextWrapper from "./Context/ContextWrapper";
import { RouterProvider } from "react-router-dom";
import router from "./Routers/routers";

import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextWrapper>
      <RouterProvider router={router} />
    </ContextWrapper>
  </StrictMode>
);
