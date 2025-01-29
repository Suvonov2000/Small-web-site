import React from "react";
import Navbar from "./Navbar/navbar";
import MovieBody from "./movieBody";
import Add from "./Add";

const App_con = () => {
  return (
    <div>
      <Navbar />
      <MovieBody />
      <Add />
    </div>
  );
};

export default App_con;
