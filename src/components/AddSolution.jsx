import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const AddSolution = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:5000/add-solution", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="hero min-h-screen bg-base-200 py-16">
      <Link
        to="/"
        className="bg-green-500 text-white py-1 px-3 rounded border-2 border-green-500 hover:bg-white hover:text-green-500 absolute top-6 left-6"
      >
        {" "}
        Back to Home
      </Link>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card w-3/4 shadow-2xl bg-base-100"
      >
        <h2 className="text-2xl font-bold text-center my-4 border-b-2 border-green-500 text-green-600 pb-3">
          Add New Solution
        </h2>
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              {...register("title", { required: true })}
              placeholder="Type of Error"
              className="input input-success"
            />
            {errors.title && (
              <span className="text-red-500 mt-1">Title is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Solutions</span>
            </label>
            <textarea
              className="textarea textarea-success"
              placeholder="Solutions of the error"
              {...register("solution", { required: true })}
            ></textarea>
            {errors.solution && (
              <span className="text-red-500 mt-1">Solution is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Video Reference</span>
            </label>
            <input
              type="rul"
              {...register("video_link")}
              placeholder="Video where you got the solution"
              className="input input-success"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Blog Reference</span>
            </label>
            <input
              type="url"
              {...register("blog_link")}
              placeholder="Blog where you got the solution"
              className="input input-success"
            />
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Submit"
              className="btn btn-success text-white"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddSolution;
