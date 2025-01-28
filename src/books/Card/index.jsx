import React from "react";

const Card = ({name, published, author, id}) =>{
    return (
        <div>{name} {published} {author} {id} </div>
    )
}

export default Card;