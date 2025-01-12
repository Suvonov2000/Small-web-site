import { Button } from "antd";
import { useReducer } from "react";

const reducer =(state, action)=>{
    switch (action.type) {
        case "increment":
            return {count: state.count +1};
        case "decrement":
            return {count: state.count -1};
            default:
                console.log("hhh")
    }
    return {state:state.count +1};
}

const App_reduce =()=>{
    const [state, dispatch] = useReducer(reducer, {count:0})
    return(
        <div className="w-[100%] h-[100vh] flex items-center justify-center">
            <Button onClick={()=>dispatch({type:"decrement"})}>-</Button>
            {state.count}
            <Button onClick={()=>dispatch({type:"increment"})}>+</Button>
        </div>
    )
}

export default App_reduce;