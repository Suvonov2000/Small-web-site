import { Button } from "antd";

function App (){
    return(
        <div className="flex items-center justify-center">
            <div className="w-[500px] h-[500px] bg-orange-500 mt-52">
                <div className="flex justify-center gap-[10px] text-7xl w-full mt-[20px]">
                    <h3>0</h3>:<h3>0</h3>:<h3>0</h3>
                </div>
                <div className="w-[80%] m-auto flex justify-between mt-[240px]">
                    <Button type="primary">Lap</Button>
                    <Button>Start</Button>
                    <Button danger type="primary">Restart</Button>
                </div>
            </div>
        </div>
    )
}
export default App;