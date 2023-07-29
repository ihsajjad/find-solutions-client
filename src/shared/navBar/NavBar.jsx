import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { solutionsContext } from "../../context/LoadSolutionsData";
import { AuthContext } from "../../providers/AuthProvider";

const NavBar = () => {
  const { setSearchText } = useContext(solutionsContext);
  const { googleSignIn, user } = useContext(AuthContext);

  //   taking search text for query
  const handleSearch = (e) => {
    const text = e.target.value;
    setSearchText(text);
  };

  //   login user with google
  const handleLogin = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="navbar bg-base-100 border-b-2 border-green-500">
      <div className="">
        <h2 className="text-4xl font-bold text-center my-4 text-green-600 pb-3">
          Find Solutions
        </h2>
      </div>
      <div className="text-center mx-auto">
        <input
          onChange={handleSearch}
          type="text"
          placeholder="Search for solution"
          className="input input-bordered input-accent max-w-xs outline-0 input w-24 md:w-auto"
        />{" "}
      </div>
      <div className="flex-none gap-2">
        <div className="form-control"></div>
        <div className="dropdown dropdown-end flex items-center justify-center space-x-2">
          {user ? (
            <>
              <Link
                to="/add-solution"
                className="bg-green-500 text-white py-1 px-3 rounded border-2 border-green-500 hover:bg-white hover:text-green-500"
              >
                Add Solution
              </Link>
              <div>
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
            </>
          ) : (
            <>
              <button
                onClick={handleLogin}
                className="bg-green-400 h-10 w-10 text-2xl flex items-center justify-center rounded-full"
              >
                <FaGoogle />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
