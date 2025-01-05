import { Button } from "antd";
import { useEffect, useRef, useState } from "react";




function App () {

    const [second, setSecond] = useState(0);
    const [minute, setMinute] = useState(0);
    const [hour, setHour] = useState(0);
    const [running, setRunning] = useState(false);
    const timerRef = useRef(null);

    const changeSecond =(previous) =>{
        if (previous === 59){
            setMinute(changeMinute);
            return 0;
        }
        return previous +1
    };

    const changeMinute =(previous) =>{
        if (previous === 59){
            setHour((previous)=>{
                return previous +1
            })
            return 0;
        }
        return previous +1
    };



    useEffect(()=>{
        if (running)
        timerRef.current = setInterval(() => {
            setSecond (changeSecond)
        }, 1000);
        else clearInterval(timerRef.current);
    },[running]);

    const reset = () => {
        setSecond(0);
        setMinute(0);
        setHour(0);
    };


    return(

        <div className="flex items-center justify-center">
            <div className="w-[500px] h-[500px] bg-red-500 mt-52">
                <div className="flex justify-center gap-[10px] text-7xl w-full mt-[20px]">
                    <h3>{hour}</h3>:<h3>{minute}</h3>:<h3>{second}</h3>
                </div>
                <div className="w-[80%] m-auto flex justify-center gap-[50px] mt-[20px]">
                  {running
                   ?<Button onClick={()=>(setRunning(false))}>Pause</Button>
                   :<Button onClick={()=> setRunning(true)}>Start</Button>
                  }
                   <Button onClick={reset}>Restart</Button>
                </div>
            </div>
        </div>
    )
}

export default App;