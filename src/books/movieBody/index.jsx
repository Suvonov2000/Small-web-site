import React, { useContext } from "react";
import { movieContext } from "../context/movieContext";
import Card from "../Card";

const MovieBody = () => {
  const [data, setData] = useContext(movieContext);

  return (
    <div>
      {data.map((value) => (
        <Card {...value} />
      ))}
    </div>
  );
};

export default MovieBody;
