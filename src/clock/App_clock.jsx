import{useEffect, useState, useRef} from "react";
import {Button} from "antd";


function App () {
    const timeRef = useRef(null);
    const [second, setSecond] = useState(0);
    const [minute, setMinute] = useState(0);
    const [hour, setHour] = useState(0);
    const [running, setRunning] = useState(false);


    const changeSecond = ((previous)=>{
        if(previous === 59){
            setMinute(changeMinute)
            return 0;
        }
        return previous + 1
    });

    const changeMinute = ((previous)=>{
        if(previous === 59){
            setHour((previous)=>{
                return previous +1;
            })
            return 0;
        }
        return previous + 1
    });



  useEffect (()=>{
    if(running)
        timeRef.current = setInterval(() => {
            setSecond(changeSecond)
        }, 10);
    else clearInterval(timeRef.current);
  },[running]);

     const reset = () =>{
        setSecond(0);
        setMinute(0);
        setHour(0);
     };

    return (
        <div id="main" className="flex items-center justify-center">
            <div className="w-[500px] h-[500px] bg-orange-500 mt-52">
                <div className="flex justify-center gap-[10px] text-7xl w-full mt-[20px]">
                    <h3>{hour}</h3>:<h3>{minute}</h3>:<h3>{second}</h3>
                </div>
                <div className="w-[80%] m-auto flex items-center justify-between mt-[20px]">
                <Button type="primary">Tap</Button>
                {running
                ?<Button onClick={()=> setRunning(false)}>Pause</Button>
                :<Button onClick={()=>setRunning(true)}>Start</Button>
                }
                <Button danger type="primary" onClick={reset}>REstart</Button>
                </div>
            </div>
        </div>
    )
}

export default App;
