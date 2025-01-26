import React from "react";
import { Countcontext } from "./context/countContext";
import  Card  from "./Card";

const App_con = () =>{
    return (
        <Countcontext.Provider value="This is global value">
            <Card/>
        </Countcontext.Provider>
    )
};

export default App_con;