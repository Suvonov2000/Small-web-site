import { Button } from "antd";
import { useState, useReducer } from "react"

const reducer = (state, action) =>{
    switch (action.type) {
        case "increment":
            return {count: state.count +1};
        case "decrement":
            return {count: state.count -1}
            default:
                console.error("You called dispatch without any type")
    }
    return {count: state.count +1}
}

const  App_reduce = () =>{
    // const [count, setCount] = useState(0);
    const [state, dispatch] = useReducer(reducer, {count: 0});
    return (
        <div className="w-[100%] h-[100vh] flex justify-center items-center">
            <Button primary onClick={()=>dispatch({type:"decrement"})}>-</Button>
            {state.count}
            <Button danger onClick={()=>dispatch({type: "increment"})}>+</Button>
        </div>
    );
};

export default App_reduce;