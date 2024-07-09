import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Rootlayout from "./components/Rootlayout/Rootlayout";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/Home/Home";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import Cart from "./components/Cart/Cart";
import Catalogue from "./components/Catalogue/Catalogue";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";

function App() {
  let router=createBrowserRouter([
    {
      path:'',
      element:<Rootlayout/>,
      children:[
        {
          path:'',
          element:<Home/>
        },
        {
          path:'signup',
          element:<SignUp/>
        },
        {
          path:'signin',
          element:<SignIn/>
        },
        {
          path:'cart',
          element:<Cart/>
        },
        {
          path:'catalogue',
          element:<Catalogue/>
        },
        {
          path:'aboutus',
          element:<AboutUs/>
        },
        {
          path:'contactus',
          element:<ContactUs/>
        }
      ]
    }
  ])
  return (
    <div className="App">
       <RouterProvider router={router}/>
    </div>
  );
}

export default App;
