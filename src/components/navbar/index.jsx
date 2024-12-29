import { LoginOutlined, SearchOutlined, ShoppingOutlined } from "@ant-design/icons";

const Navbar = () =>{
    return(
        <div className="w-full flex justify-between h-[78px] items-center border-b border-solid border-[#46A35880]">
            <div className="">
                <img
                
                src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flogo.svg?alt=media&amp;token=fc9659d6-f435-43b9-a624-8b0d3a574baa" alt="logo" class="cursor-pointer" />
            </div>
            <div className="flex gap-6">
                <h3 className="cursor-pointer">Home</h3>
                <h3 className="cursor-pointer">Shop</h3>
                <h3 className="cursor-pointer">Plant Care</h3>
                <h3 className="cursor-pointer">Blogs</h3>
            </div>
            <div className="flex items-center gap-6">
                <SearchOutlined />
                <div className="relative">
                    <ShoppingOutlined />
                    <div className="absolute rounded-full w-[10px] h-[10px] bg-[#46A358] top-[2px] right-[-2px] text-[7px] text-white flex items-center justify-center">6</div>
                </div>
                <button className="w-[100px] h-[35px] rounded-[6px] border-none bg-[#46A358] text-white text-base flex items-center justify-center gap-4">
                   <LoginOutlined /> Login
                    </button>
                    
            </div>
        </div>
    )
}

export default Navbar;