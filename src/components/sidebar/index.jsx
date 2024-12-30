import { Slider } from "antd";
import { useState } from "react";

const Sidebar = () =>{
    const [price, setPrice] = useState([0,1500])
    return (
     <div className="bg-[#FBFBFB] p-4 flex flex-col gap-6 w-[300px]">
        <div>
            <h3 className="text-base font-semibold">Category</h3>

            <div className="mt-2 flex flex-col gap-2">
                <div className="flex w-full justify-between text-sm  hover:text-[#46A358] cursor-pointer">
                <h3>House Plants</h3>

                <p>(33)</p>
                </div>
                <div className="flex w-full justify-between text-sm  hover:text-[#46A358] cursor-pointer">
                <h3>Potter Plants</h3>

                <p>(12)</p>
                </div>
                <div className="flex w-full justify-between text-sm  hover:text-[#46A358] cursor-pointer">
                <h3>Seeds</h3>

                <p>(65)</p>
                </div>
                <div className="flex w-full justify-between text-sm  hover:text-[#46A358] cursor-pointer">
                <h3>Small Plants</h3>

                <p>(39)</p>
                </div>
                <div className="flex w-full justify-between text-sm  hover:text-[#46A358] cursor-pointer">
                <h3>Big Plants</h3>

                <p>(23)</p>
                </div>
                <div className="flex w-full justify-between text-sm  hover:text-[#46A358] cursor-pointer">
                <h3>Succulents</h3>

                <p>(17)</p>
                </div>
                <div className="flex w-full justify-between text-sm  hover:text-[#46A358] cursor-pointer">
                <h3>Trerrariums</h3>

                <p>(19)</p>
                </div>
                <div className="flex w-full justify-between text-sm  hover:text-[#46A358] cursor-pointer">
                <h3>Gardening</h3>

                <p>(13)</p>
                </div>
                <div className="flex w-full justify-between text-sm  hover:text-[#46A358] cursor-pointer">
                <h3>Accessories</h3>

                <p>(18)</p>
                </div>
            </div>
        </div>

        <div>
            <h3 className="text-base font-semibold">Price Range</h3>

            <div className="mt-2 flex flex-col gap-4">
                <Slider onChange={(values)=>{
                    setPrice(values);
                }} range min={0} max={1500} defaultValue={price}/>

                <h3 className="font-normal">
                    Price: <span className="text-[#46A358] font-semibold">${price[0]}-${price[1]}</span>
                </h3>
            </div>
        </div>
           
     </div>

    );
}

export default Sidebar