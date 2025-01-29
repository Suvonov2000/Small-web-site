import React, { useContext } from "react";
import { Wrapper } from "./style";
import { movieContext } from "../context/movieContext";

const Navbar = () => {
  const [data] = useContext(movieContext);
  return (
    <Wrapper>
      <h3>Movie star</h3>
      <h3>Movie count:{data.length}</h3>
    </Wrapper>
  );
};

export default Navbar;
