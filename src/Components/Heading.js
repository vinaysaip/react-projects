const LogoComponent = () => (
    <div className="logo-container">
      <img className="logo-img"src={"https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg"} alt="logo"></img>
    </div>
  );
  const NavItemsComponent = ()=>{
  return <div className="pr-3">
    <ul className="nav-items
  ">
      <li className="nav-item">Home</li>
      <li className="nav-item">About</li>
      <li className="nav-item">Contact</li>
      <li className="nav-item">Cart</li>
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