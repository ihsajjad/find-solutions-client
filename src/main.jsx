import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SolutionsDetails from "./components/SolutionsDetails.jsx";
import AddSolution from "./components/AddSolution.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: `/solution/:id`,
    element: <SolutionsDetails />,
  },
  {
    path: "/add-solution",
    element: <AddSolution />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
