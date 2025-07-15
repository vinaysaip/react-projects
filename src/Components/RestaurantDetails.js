import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import RestaurantMenu from "./Menu";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { Link } from "react-router";

const RestaurantDetails = () => {
  const { id } = useParams();
  const restaurantData = useRestaurantMenu(id);
  let resData = null;
  let menuData = null;
  if (restaurantData) {
    resData = restaurantData?.data?.cards[2]?.card?.card?.info || {};
    menuData =
      restaurantData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
        ?.cards || [];
  }
  console.log("Restaurant Data:", resData);
  if (!resData) return <Shimmer />;
  const { name, avgRating, totalRatingsString, costForTwoMessage, cuisines } =
    resData || {};
  return (
    <div className="flex flex-col p-4 m-4">
      <Link to={"/"}>
        <p className="text-blue-500 py-2">Back To Home</p>
      </Link>
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-md font-semibold py-2">
        {avgRating + "⭐"} ({totalRatingsString})
      </p>
      <p className="text-md font-semibold">{costForTwoMessage}</p>
      <p className="text-sm font-medium text-gray-500 py-2">
        {cuisines.join(".")}
      </p>
      <h3 className="text-2xl font-bold py-4">Menu</h3>
      <div className="menu-container">
        <RestaurantMenu menuItems={menuData} />
      </div>
    </div>
  );
};

export default RestaurantDetails;
