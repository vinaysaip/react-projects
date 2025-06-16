import { useState } from "react";

const LogoComponent = () => (
    <div className="logo-container">
      <img className="logo-img"src={"https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg"} alt="logo"></img>
    </div>
  );
  const NavItemsComponent = ()=>{
    const [btnName,setBtnName]  = useState("Login");
  return <div className="pr-3">
    <ul className="nav-items
  ">
      <li className="nav-item">Home</li>
      <li className="nav-item">About</li>
      <li className="nav-item">Contact</li>
      <li className="nav-item">Cart</li>
      <button className="login-button" onClick={()=>{
        setBtnName(btnName === "Login" ? "Logout" : "Login");
      }}>{btnName}</button>
      </ul>
  </div>
  }
  const HeadingComponent = ()=>(
    <div className="container">
      <LogoComponent />
      <NavItemsComponent />
    </div>
  );

export default HeadingComponent;