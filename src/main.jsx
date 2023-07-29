import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider.jsx";
import { router } from "./router/Router";
import LoadSolutionsData from "./context/LoadSolutionsData";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <LoadSolutionsData>
        <RouterProvider router={router}></RouterProvider>
      </LoadSolutionsData>
    </AuthProvider>
  </React.StrictMode>
);
