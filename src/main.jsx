import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import App_clock from "./clock/App_clock"
import App_reduce from './reduce/App_reduce'
import App_reduce_2 from './reduce/App_reduce_2.jsx'
// import App_shopping from './shopping/App_shopping.jsx'
// import App_shopping_2 from "./shopping_2/App_shopping_2.jsx"
import App_con from "./books/App_con.jsx";
import MovieContextProvider from './books/context/movieContext.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <App_clock/> */}
    {/* <App_reduce/> */}
    {/* <App_reduce_2/> */}
    {/* <App_shopping/> */}
    {/* <App_shopping_2/> */}
    <MovieContextProvider>
      <App_con/>
    </MovieContextProvider>
  </StrictMode>,
)
