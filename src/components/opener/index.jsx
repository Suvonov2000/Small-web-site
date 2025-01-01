

const Opener = () => {
    return <div className="w-full h-[450px] bg-[#F5F5F5F5] mt-3 flex justify-between items-center">
        <div className="flex-1 h-full pl-10">
            <h3 className="text-sm text-[#3D3D3D] uppercase mt-[68px]">Welcome to GreenShop</h3>
            <h1 className="text-[#3D3D3D] text-[70px] font-black uppercase leading-[70px]">
                Let's Make a better <span className="text-[#46A358]">Planet</span>
            </h1>
            <p className="text-[#727272] font-normal text-sm mt-2">
                We are an online planet shop offering a wide range of cheap and trendy
                planets.<br/> Use our plants to create an unique Urban Jungle. Order your
                favorite plants!
            </p>
            <button className="w-[140px] h-[40px] rounded-[6px] border-none bg-[#46A358] text-white text-base flex items-center justify-center gap-4 uppercase mt-[44px]">
                  Shop NOw
                </button>
        </div>
        <div className="flex-1 justify-end relative">
            <img src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower2.png?alt=media&token=905a94e2-1250-4e56-9dcb-d16bbb1a31ca" 
            alt=""
            className="absolute bottom-[50px] left-[50px]"
             />
            <img src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower1.png?alt=media&token=0b53d608-7264-4c54-b497-a9bf054fcd9d" 
            alt="" />
        </div>
    </div>
};

export default Opener;