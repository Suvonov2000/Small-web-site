import React, { useContext } from "react";
import { movieContext } from "../context/movieContext";
import { Wrapper } from "./style";
import { Button } from "antd";

const Card = ({ name, published, author, id }) => {
  const [data, setData] = useContext(movieContext);
  return (
    <Wrapper>
      <h3>{name}</h3>
      <p>{published}</p>
      <p>{author}</p>
      <div>
        <Button>Edit</Button>
        <Button
          onClick={() => setData(data.filter((value) => value.id !== id))}
        >
          Delete
        </Button>
      </div>
    </Wrapper>
  );
};

export default Card;
