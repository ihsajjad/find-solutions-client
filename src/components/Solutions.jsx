import { useContext } from "react";
import { Link } from "react-router-dom";
import { solutionsContext } from "../context/LoadSolutionsData";

const Solutions = () => {
  const { solutions } = useContext(solutionsContext);

  return (
    <div className="px-20">
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
