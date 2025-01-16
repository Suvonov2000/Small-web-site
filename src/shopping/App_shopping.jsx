import { useReducer } from "react";
import mockData from "./data";


const reducer = (state, action) => {
    switch (action.type) {
        case "search":
            return{data: mockData.filter((value)=>{
                return value.title.toLowerCase().includes(action.payload.searchValue.toLowerCase());
            })};
            default:
    }
};

function App_shopping () {
    const [state, dispatch] = useReducer(reducer, {data: mockData});
    return (
     <div>
        <h1 style={{textAlign:"center"}}>My blogs</h1>
        <div style={{margin:"auto", width:"fit-content"}}>
            <input placeholder="Type for search" onChange={(e)=>
                dispatch({type:"search",
                    payload: {searchValue: e.target.value}
                })}/>
        </div>

        {
            state.data.map((value)=>(
                <div 
                key={value.id}
                style={{width:"300px", height:"300px", border:"1px solid black", margin:"20px auto"}}>
                    <img style={{width:"100%", height:"60%"}} src={value.url} alt={value.id}/>
                    <h3 style={{textAlign:"center"}}>{value.title}</h3>
                    <p style={{}}>{value.content}</p>
                    <bold>{value.price}</bold>
                </div>
            ))
        }
    </div>
    )
}

export default App_shopping;