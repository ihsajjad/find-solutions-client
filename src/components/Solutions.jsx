import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Solutions = () => {
  const [solutions, setSolutions] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/all-solutions?search=${searchText}`)
      .then((res) => res.json())
      .then((data) => setSolutions(data));
  }, [searchText]);
  console.log(searchText, solutions);
  const handleSearch = (e) => {
    const text = e.target.value;
    setSearchText(text);
  };

  return (
    <div className="px-20">
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
      <h2 className="text-xl font-bold">Results matched: {solutions.length}</h2>

      <div>
        {solutions.map((solution, i) => (
          <div
            key={i}
            className="p-6 border-2 border-green-400 rounded-lg my-6 relative"
          >
            <h3 className="text-2xl font-bold">{solution.title}</h3>
            <p>{solution.solution}</p>
            <Link
              to={`/solution/${solution._id}`}
              className="bg-green-500 text-white py-1 px-3 rounded border-2 border-green-500 hover:bg-white hover:text-green-500 absolute top-3 right-3"
            >
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
