import { createContext, useEffect, useState } from "react";

export const solutionsContext = createContext([]);

const LoadSolutionsData = ({ children }) => {
  const [solutions, setSolutions] = useState([]);
  const [searchText, setSearchText] = useState("");
  console.log(solutions);

  useEffect(() => {
    fetch(`http://localhost:5000/all-solutions?search=${searchText}`)
      .then((res) => res.json())
      .then((data) => setSolutions(data));
  }, [searchText]);

  const dataInfo = {
    solutions,
    setSearchText,
  };

  return (
    <solutionsContext.Provider value={dataInfo}>
      {children}
    </solutionsContext.Provider>
  );
};

export default LoadSolutionsData;
