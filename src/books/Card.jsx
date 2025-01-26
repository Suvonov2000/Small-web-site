import React, {useContext} from "react";
import { Countcontext } from "./context/countContext";

const Card = () =>{
    const value = useContext(Countcontext)
    return (
        <div>Card {value} </div>
    )
}

export default Card;