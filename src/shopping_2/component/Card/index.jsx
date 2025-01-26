
import React, {useContext} from "react";
import Delete from "../DeleteItems";
import { parfumContext } from "../../context/parfumeContext";

const Card = (props) =>{
    const data = useContext(parfumContext);
    return <div 
    style={{
        width:"300px",
        height:"355px",
        border:"1px solid black", 
        margin:"20px 0px",
    }}>
        <img alt="" src={props.img} style={{width:"100%", height:"200px"}} />
        <h1 style={{textAlign:"center", textTransform:"uppercase"}}>{props.title}</h1>
        <h3>{props.content}</h3>
        <p>
            <b>Price:</b> {data}
        </p>
        <Delete onDelete={props.onDelete} id={props.id}/>
    </div>
}

export default Card;