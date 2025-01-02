import { Slider } from "antd";
import { useState } from "react";

const Sidebar = () =>{
    const [price, setPrice] = useState([0,1500])
    return (
     <div className="bg-[#FBFBFB] p-4 flex flex-col gap-6 w-[300px]">
        <div className="p-4">
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

        <div className="p-4">
            <h3 className="text-base font-semibold">Price Range</h3>

            <div className="mt-2 flex flex-col gap-4">
                <Slider onChange={(values)=>{
                    setPrice(values);
                }} range min={0} max={1500} defaultValue={price}/>

                <h3 className="font-normal">
                    Price: 
                    <span className="text-[#46A358] font-semibold">
                        ${price[0]}-${price[1]}
                    </span>
                </h3>

                <button type="button"
                className="w-[100px] h-[35px] rounded-[6px] border-none bg-[#46A358] text-white text-base">
                    Filter
                </button>
            </div>
        </div>
           
        <div className="p-4">
            <h3 className="text-base font-semibold">Size</h3>
            <div className="mt-2 flex flex-col gap-4">
                <div className="flex w-full justify-between text-sm hover:text-[#46A358] cursor-pointer">
                    <h3>Small</h3>

                    <p>(119)</p>
                </div>
            </div>
            <div className="mt-2 flex flex-col gap-4">
                <div className="flex w-full justify-between text-sm hover:text-[#46A358] cursor-pointer">
                    <h3>Medimum</h3>

                    <p>(86)</p>
                </div>
            </div>
            <div className="mt-2 flex flex-col gap-4">
                <div className="flex w-full justify-between text-sm hover:text-[#46A358] cursor-pointer">
                    <h3>Large</h3>

                    <p>(78)</p>
                </div>
            </div>
        </div>

        <div className="bg-[#46A3581A] h-[470px] flex flex-col items-center">
            <img src="./supersale.png" alt="" />
            <h3 className="text-xl font-semibold uppercase">Up to 75% off</h3>
            <img 
            className="mt-auto"
            src="https://s3-alpha-sig.figma.com/img/4575/e3df/52fa214db1f3ce519277860c13b11e21?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QO6q6Nckujx3fm-gwf3nQHF6Vc3ZUaSdELNcpGa2W9-ZSZoT~0bIF8t8VvdmPmtg0QzXKfptM2~bA2svQ0EDP0LvUcYbbmOb6dt4DGPMsl43dZ4kh5OUXRIDB9Yqp8Cfylvi7sCHRVFjFzpsU8fqnv1onNh3ijqMq9a5476alFAf1-qRJnqMqLEO6leAcHO2-4TBNCBRQ0xM6EEqnPqws3GTAL05pgcWT3Zb5j5GDZlktsiirMNs6qCValcrkqIHBsK4bYU~M2unVZCb6AZ5nxvuxLaVkpQaZEseol1dDk6I-dCi5YVj4lEvLvO-jNtOPKdty0O-SZqIZerExfpk1A__"
             alt="" />
        </div>

     </div>

    );
}

export default Sidebar