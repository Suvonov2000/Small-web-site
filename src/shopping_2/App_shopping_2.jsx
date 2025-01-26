import React, { useState } from "react";
import Card from "./component/Card";
import { parfumContext } from "./context/parfumeContext";

const App_shopping_2 = () =>{
    const [data, setData] = useState([{
        id: 0,
        title: "Bvlgari",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        url:"https://fraguru.com/mdimg/secundar/o.89052.jpg",
        price: "100$",
    },

    {
        id: 1,
        title: "Channel",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        url:"https://avatars.mds.yandex.net/i?id=688d2fd3d4cf79c1c95d1f70e009feac_l-6918385-images-thumbs&n=13",
        price: "100$",
    },

    {
        id: 2,
        title: "Versace",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
        url:"https://www.advertisingphotography.in/wp-content/uploads/2017/04/Versace-Aftershave-Advertising-Photography.jpg",
        price: "100$",
    },

    {
        id: 3,
        title: "Lanvin",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        url:"https://avatars.mds.yandex.net/get-mpic/4291905/img_id6426965233891186591.jpeg/orig",
        price: "100$",
    },

    {
        id: 4,
        title: "Gucci",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        url:"https://www.laromat.ru/pics/gucci_flora-glorious-mandarine_woman.jpg",
        price: "100$",
    },
    
    {
        id: 5,
        title: "Armani",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
        url:"https://avatars.mds.yandex.net/i?id=a1924043104ca95c31906d004c5b3ccbe4b67647-10449875-images-thumbs&n=13",
        price: "100$",
    }]);
    const onDelete = (id) =>{
        setData(data.filter((value)=> value.id !== id));
    };

    return
    <parfumContext.Provider value={"hello"}>
        <div>
        {data.map((value)=>{
            return <div 
            key={value.id}
            style={{
                display:"flex", 
                justifyContent:"center", 
                alignItems:"center",
                }}>
                <Card 
                img={value.url} 
                title={value.title} 
                content={value.content} 
                price={value.price}
                id={value.id}
                onDelete={onDelete} />
            </div>
        })}
    </div>
    </parfumContext.Provider>
}

export default App_shopping_2; 