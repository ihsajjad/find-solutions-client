import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SolutionsDetails = () => {
  const [solution, setSolution] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/solution/${id}`)
      .then((res) => res.json())
      .then((data) => setSolution(data));
  }, [id]);

  console.log(solution);

  return (
    <div className="p-8">
      <Link
        to="/"
        className="bg-green-500 text-white py-1 px-3 rounded border-2 border-green-500 hover:bg-white hover:text-green-500"
      >
        {" "}
        Back to Home
      </Link>

      <div>
        <h3 className="text-2xl font-bold my-8">{solution.title}</h3>
        <p className="text-xl font-semibold">{solution.solution}</p>

        <div className="flex items-center justify-center my-8">
          <iframe
            width="560"
            height="315"
            src={solution?.video_link}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <a href={solution.blog_link} className="btn-link text-xl font-bold">
          Read Blog
        </a>
      </div>
    </div>
  );
};

export default SolutionsDetails;
