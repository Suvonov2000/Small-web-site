import React, { useState, useContext } from "react";
import { Button } from "antd";
import { movieContext } from "../context/movieContext";

const Add = () => {
  const [data, setData] = useContext(movieContext);
  const [name, setName] = useState("");
  const [published, setPublished] = useState("");
  const [author, setAuthor] = useState("");
  const onSubmit = (e) => {
    setData([
      ...data,
      { name: name, published: published, author: author, id: data.length },
    ]);
  };
  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
        name={"name"}
      />
      <input
        value={published}
        onChange={(e) => setPublished(e.target.value)}
        placeholder="author"
        name={"author"}
      />
      <input
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="published"
        name={"published"}
      />
      <Button onClick={onSubmit}>Add new value</Button>
    </div>
  );
};

export default Add;
