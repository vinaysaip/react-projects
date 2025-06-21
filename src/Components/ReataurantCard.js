const RestaurantCard = (props)=> {
    const {resData} = props;
    const {name, cuisines, costForTwo, avgRating,locality,cloudinaryImageId} = resData;
    return(<div>
      <div className="restaurant-card">
        <img className="restaurant-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" +cloudinaryImageId } alt="Restaurant"></img>
        <h3 className="restaurant-name">{name}</h3>
        <div className="restaurant-details">
        <p className="restaurant-description">{cuisines.slice(0,2).join(' .')}</p>
        <p className="restaurant-description">{locality}</p>
        </div>
        <div className="restaurant-details">
        <p className="restaurant-description">{costForTwo}</p>
        <p className="restaurant-description">{avgRating}</p>
        </div>
      </div>
    </div>)
  }
export default RestaurantCard;  