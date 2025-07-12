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

const AppContainer = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <div className="app-container">
      <HeadingComponent />
      {onlineStatus ? (
        <Outlet />
      ) : (
        <div className="offline-message">
          <h1>Looks like you are offline!!</h1>
          <h3>Please check your Intenet Connection</h3>
        </div>
      )}
      <FooterComponent />
    </div>
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
        Component: AboutUs,
      },
      {
        path: "/contactUs",
        Component: ContactUs,
      },
      {
        path: "/restaurant/:id",
        Component: RestaurantDetails,
      },
    ],
    errorElement: <ErrorComponet />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
