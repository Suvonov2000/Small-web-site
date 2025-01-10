import { Button } from "antd";
import { useState } from "react"



const  App_reduce = () =>{
    const [count, setCount] = useState(0);
    return (
        <div className="w-[100%] h-[100vh] flex justify-center items-center">
            <Button>-</Button>
            {count}
            <Button>+</Button>
        </div>
    );
};

export default App_reduce;