import { Carousel } from "antd";
import Navbar from "./components/navbar";
import Opener from "./components/opener";
import Sidebar from "./components/sidebar";

const App = () =>{
  return (
    <div className="w-[80%] m-auto">
      <Navbar />
      <Carousel>
        <div>
          <Opener />
        </div>
        <div>
          <Opener />
        </div>
        <div>
          <Opener />
        </div>
      </Carousel>
      <Sidebar />
    </div>
  )
}

export default App;