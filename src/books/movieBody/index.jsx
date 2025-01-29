import React, { useContext } from "react";
import { movieContext } from "../context/movieContext";
import Card from "../Card";
import { Wrapper } from "./style";

const MovieBody = () => {
  const [data] = useContext(movieContext);

  return (
    <Wrapper>
      {data.map((value) => (
        <Card {...value} />
      ))}
    </Wrapper>
  );
};

export default MovieBody;
