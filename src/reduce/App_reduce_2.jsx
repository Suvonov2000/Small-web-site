import React, {useReducer, useState} from "react";
import { Button } from "antd";

const reducer = (state,action) =>{ 
    switch(action.type) {
        case "addNewTodo":
            return {
                data: [...state.data,
                    {
                        id: state.data.length +1, 
                        todoName:action.payload.todoName, 
                        complited:false
                    }
                ]
            };
            case "inputCheckBoxChanging":
                return {
                    data:state.data.map((value)=>value.id === action.payload.id 
                    ?{...value,complited: action.payload.value}
                    :value)
                };
                case "deleteTodo":
                    return{
                        data: state.data.filter((value)=>value.id !== action.payload.id),
                    };
                case "eraseAll":
                    return{
                        data:[],
                    };
                default:
    }
}

const App_reduce_2 =()=>{

    const [addValue, setAddValue] = useState("");

    const [state, dispatch] = useReducer(reducer, {
        data:[
            {id:0, todoName: "Creating Merchant", complited: false},
            {id:1, todoName: "Watching movie", complited:true}
        ],
        
    });

    return(
        <div 
        style={{
            width:"100%",
            height:"100vh",
            display: "flex",
            justifyContent: "center",
            alignItems:"center",
            flexDirection: "column",
        }}
        >
            <div className="header">
            <label>TYpe something that wanna do:</label> {""} 
            <input value={addValue} onChange={(e)=>setAddValue(e.target.value)}/>
            <Button onClick={()=>{
                setAddValue("")
                    dispatch({type:"addNewTodo", payload:{todoName: addValue}})
                    }
                    }>Add</Button>
            </div>
            <div className="body">
                {state.data.map((value)=>(
                    <div 
                    key={value.id}
                    style={{
                        display:"flex", 
                        gap:"20px", 
                        textDecoration: `${value.complited ?"line-through":"none"}`,

                        }}>
                        <input onChange={()=>
                            dispatch({
                                type:"inputCheckBoxChanging", 
                                payload: {id: value.id, value: !value.complited},
                                })}
                                checked={value.complited} 
                                type={"checkbox"}
                        />
                        <p>{value.todoName}</p>
                        <Button onClick={()=>dispatch({type:"deleteTodo", payload: {id:value.id}})}>
                            Del
                        </Button>
                    </div>
                ))}
                {state.data.length >= 2 ? (
                
                <Button onClick={()=>dispatch({type: "eraseAll"})}>Erase all</Button>
            ) : (
                ""
            )}
            </div>
        </div>
    );
};

export default App_reduce_2;