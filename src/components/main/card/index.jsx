import { HeartOutlined, SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";

const Card = ()=>{
    return <div className="flex flex-col gap-4 ">
        <div className="h-[300px] bg-[#FBFBFB] flex items-center justify-center group relative">
        <img 
            className=" h-full"
            src="https://s3-alpha-sig.figma.com/img/4575/e3df/52fa214db1f3ce519277860c13b11e21?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QO6q6Nckujx3fm-gwf3nQHF6Vc3ZUaSdELNcpGa2W9-ZSZoT~0bIF8t8VvdmPmtg0QzXKfptM2~bA2svQ0EDP0LvUcYbbmOb6dt4DGPMsl43dZ4kh5OUXRIDB9Yqp8Cfylvi7sCHRVFjFzpsU8fqnv1onNh3ijqMq9a5476alFAf1-qRJnqMqLEO6leAcHO2-4TBNCBRQ0xM6EEqnPqws3GTAL05pgcWT3Zb5j5GDZlktsiirMNs6qCValcrkqIHBsK4bYU~M2unVZCb6AZ5nxvuxLaVkpQaZEseol1dDk6I-dCi5YVj4lEvLvO-jNtOPKdty0O-SZqIZerExfpk1A__"
             alt="" />

             <div className="hidden absolute inset-x-auto bottom-2 gap-4 group-hover:flex">
                <div className="w-[35px] h-[35px] rounded-[4px] bg-white flex items-center justify-center cursor-pointer text-[20px] hover:text-[#46A358]">
                    <ShoppingCartOutlined/>
                </div>
                <div className="w-[35px] h-[35px] rounded-[4px] bg-white flex items-center justify-center cursor-pointer text-[20px] hover:text-[#46A358]">
                    <HeartOutlined/>
                </div>
                <div className="w-[35px] h-[35px] rounded-[4px] bg-white flex items-center justify-center cursor-pointer text-[20px] hover:text-[#46A358]">
                    <SearchOutlined/>
                </div>
             </div>
        </div>

        <h1 className="text-base">Barberton Daisy</h1>
        <h3 className="text-sm font-semibold  text-[#46A358]">119.00$</h3>
    </div>
}
export default Card;