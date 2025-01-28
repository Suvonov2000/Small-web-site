import { createContext, useState } from "react";

export const movieContext = createContext();

const MovieContextProvider = (props) => {
  const [data, setData] = useState([
    { name: "Harry Poter", published: 1999, author: "J.K.Rowling", id: 1 },
    { name: "Avatar", published: 2009, author: "Stephan Legs", id: 2 },
    { name: "Qunduz amaki", published: 1996, author: "Qunduz amaki", id: 3 },
    { name: "Ujas", published: 1990, author: "unknown", id: 4 },
  ]);

  return (
    <movieContext.Provider value={[data, setData]}>
      {props.children}
    </movieContext.Provider>
  );
};

export default MovieContextProvider;
