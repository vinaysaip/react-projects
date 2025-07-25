import ReactDOM from "react-dom/client";
import HeadingComponent from "./Components/Heading";
import BodyComponent from "./Components/Body";
import FooterComponent from "./Components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import ErrorComponet from "./Components/ErrorComponent";
import RestaurantDetails from "./Components/RestaurantDetails";
import useOnlineStatus from "./utils/useOnlineStatus";
import noInternet from "./utils/images/internet.png";
import { userLoginDetails } from "./utils/uesrLoginDetailsContext";
import { lazy, useState, Suspense } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import cart from "./Components/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AboutUs = lazy(() => import("./Components/AboutUs"));

const AppContainer = () => {
  const onlineStatus = useOnlineStatus();
  const [userData, setUserData] = useState(null);
  return (
    <Provider store={appStore}>
      <userLoginDetails.Provider value={{ userData, setUserData }}>
        <div className="app-container">
          <HeadingComponent />
          {onlineStatus ? (
            <Outlet />
          ) : (
            <div className="p-4 m-4 flex flex-col items-center">
              <img className="w-50 h-50" src={noInternet} alt="no internet" />
              <h1 className="text-2xl font-bold pt-8">
                Looks like you are offline!!
              </h1>
              <h3 className="pt-4 text-xl font-semibold">
                Please check your Intenet Connection
              </h3>
            </div>
          )}
          <FooterComponent />
          <ToastContainer />
        </div>
      </userLoginDetails.Provider>
    </Provider>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    Component: AppContainer,
    children: [
      {
        path: "/",
        Component: BodyComponent,
      },
      {
        path: "/aboutUs",
        element: (
          <Suspense>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "/contactUs",
        Component: ContactUs,
      },
      {
        path: "/restaurant/:id",
        Component: RestaurantDetails,
      },
      {
        path: "/cart",
        Component: cart,
      },
    ],
    errorElement: <ErrorComponet />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
