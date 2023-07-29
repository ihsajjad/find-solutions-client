import { Outlet } from "react-router-dom";
import NavBar from "../shared/navBar/NavBar";

const Main = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Main;
