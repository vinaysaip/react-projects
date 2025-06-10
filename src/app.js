import React from "react";
import ReactDOM from "react-dom/client";
import HeadingComponent from "./Components/Heading";
import BodyComponent from "./Components/Body";
import FooterComponent from "./Components/Footer";
const AppContainer = () => (
  <div className="app-container">
    <HeadingComponent />
    <BodyComponent />
    <FooterComponent />
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppContainer/>);
