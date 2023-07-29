import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { solutionsContext } from "../../context/LoadSolutionsData";

const NavBar = () => {
  const { setSearchText } = useContext(solutionsContext);

  const handleSearch = (e) => {
    const text = e.target.value;
    setSearchText(text);
  };

  return (
    <div className="navbar bg-base-100 border-b-2 border-green-500">
      <div className="flex-1">
        <h2 className="text-4xl font-bold text-center my-4 text-green-600 pb-3">
          Find Solutions
        </h2>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <div className="text-center">
            <input
              onChange={handleSearch}
              type="text"
              placeholder="Search for solution"
              className="input input-bordered input-accent w-full max-w-xs outline-0"
            />{" "}
            <Link
              to="/add-solution"
              className="bg-green-500 text-white py-1 px-3 rounded border-2 border-green-500 hover:bg-white hover:text-green-500 absolute top-3 right-3"
            >
              Add Solution
            </Link>
            <div>
              <FaGoogle />
            </div>
          </div>
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
