import React from "react";

const Delete = (props) =>{
    return <button 
    onClick={()=> props.onDelete(props.id)}
    style=
    {{
        border:"none", 
        padding:"5px 10px", 
        color:"white", 
        background:"red"
    }}>Delete{props.id}
    </button>
}

export default Delete;