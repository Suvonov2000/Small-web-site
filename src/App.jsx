import { Carousel } from "antd";
import Navbar from "./components/navbar";
import Opener from "./components/opener";
import Sidebar from "./components/sidebar";
import Main from "./components/main";

const App = () =>{
  return (
    <div className="w-[80%] m-auto">
      <Navbar />
      <Carousel dotPosition="right">
        <div>
          <Opener title="Planet Care"/>
        </div>
        <div>
          <Opener title="Blogs" />
        </div>
        <div>
          <Opener title="Shop" />
        </div>
      </Carousel>
      <div className="mt-[46px] flex gap-6">
        <Sidebar/>
        <Main/>
      </div>
    </div>
  )
}

export default App;