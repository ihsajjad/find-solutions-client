import { createBrowserRouter } from "react-router-dom";
import SolutionsDetails from "../components/SolutionsDetails";
import AddSolution from "../components/AddSolution";
import Main from "../layouts/Main";
import Home from "../pages/home/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: `/solution/:id`,
        element: <SolutionsDetails />,
      },
      {
        path: "/add-solution",
        element: <AddSolution />,
      },
    ],
  },
]);
