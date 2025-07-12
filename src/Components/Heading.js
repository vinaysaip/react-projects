import { useState } from "react";
import { Link } from "react-router";
import { companyLogoUrl } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const LogoComponent = () => (
  <Link to={"/"}>
    <div className="w-20">
      <img className="logo-img" src={companyLogoUrl} alt="logo"></img>
    </div>
  </Link>
);
const NavItemsComponent = () => {
  const onLineStatus = useOnlineStatus();
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="p-4 m-4 flex items-center">
      <ul
        className="flex items-center
  "
      >
        <li className="px-2">Online Status: {onLineStatus ? "🟢" : "🔴"}</li>
        <li className="px-2 hover:underline">
          <Link to="/">Home</Link>
        </li>
        <li className="px-2 hover:underline">
          <Link to="/aboutUs">About</Link>
        </li>
        <li className="px-2 hover:underline">
          <Link to="/contactUs">Contact</Link>
        </li>
        <li className="px-2 hover:underline">Cart</li>
        <button
          className="px-2 w-20 h-10 bg-blue-600 rounded-lg text-white cursor-pointer"
          onClick={() => {
            setBtnName(btnName === "Login" ? "Logout" : "Login");
          }}
        >
          {btnName}
        </button>
      </ul>
    </div>
  );
};
const HeadingComponent = () => (
  <div className="flex justify-between shadow-lg">
    <LogoComponent />
    <NavItemsComponent />
  </div>
);

export default HeadingComponent;
