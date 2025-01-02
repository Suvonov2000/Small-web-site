import { Pagination, Select } from "antd";
import Card from "./card";

const Main = () => {
    return (
    <div className="flex-1 flex flex-col gap-6">
        <div className="flex items-center justify-between w-full">
            <div className="flex gap-4">
                <h3 className="text-base hover:text-[#46A358] cursor-pointer hover:border-b-2 border-solid border-[#46A358]">All Plants</h3>
                <h3 className="text-base hover:text-[#46A358] cursor-pointer  hover:border-b-2 border-solid border-[#46A358]">New Arrival</h3>
                <h3 className="text-base hover:text-[#46A358] cursor-pointer  hover:border-b-2 border-solid border-[#46A358]">Sale</h3>
            </div>
            <div className="flex items-center justify-center gap-2">
                <p>Sort by:</p>
                <Select defaultValue={["default-sorting"]}
                options={[
                    {
                        label:"Default Sorting",
                        value:"default-sorting"
                    },
                    {
                        label:"The Cheapest",
                        value:"the-cheapest"
                    },
                    {
                        label:"Most Expensive",
                        value:"most-expensive"
                    },
                ]} />
            </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>

        <Pagination className="ml-auto total={100}"/>
    </div>
    )
}

export default Main;