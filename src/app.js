import ReactDOM from "react-dom/client";
import HeadingComponent from "./Components/Heading";
import BodyComponent from "./Components/Body";
import FooterComponent from "./Components/Footer";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import ErrorComponet from "./Components/ErrorComponent";
import RestaurantDetails from "./Components/RestaurantDetails";


const AppContainer = () => {
  return(<div className="app-container">
    <HeadingComponent />
    <Outlet />
    <FooterComponent />
  </div>)
};


const router = createBrowserRouter([{
  path:"/",
  Component:AppContainer,
  children:[
    {
  path:"/",
  Component:BodyComponent
},
    {
  path:"/aboutUs",
  Component:AboutUs
},
{
  path:"/contactUs",
  Component:ContactUs
},
{
  path:"/restaurant/:id",
  Component: RestaurantDetails
}
  ],
  errorElement:<ErrorComponet/>

}
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>);
