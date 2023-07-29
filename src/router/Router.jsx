import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SolutionsDetails from "../components/SolutionsDetails";
import AddSolution from "../components/AddSolution";

export const router = createBrowserRouter([
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
