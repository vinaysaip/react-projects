import RestaurantCard, { enhancedCard } from "./ReataurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import { restaurantsURL } from "../utils/constants";
import { userLoginDetails } from "../utils/uesrLoginDetailsContext";
const SearchBar = ({ searchText, onSearchChange }) => {
  handleSearchChange = (e) => {
    onSearchChange(e.target.value);
    console.log("Search Text:", searchText);
  };
  const { userData } = useContext(userLoginDetails);
  return (
    <div className="flex flex-col items-center">
      {userData && (
        <h1 className="p-3 font-semibold text-2xl">
          Hey {userData.name}, What is on your mind?
        </h1>
      )}
      <h1 className="text-xl p-2 m-2 font-bold">Search Restaurant or place</h1>
      <input
        type="text"
        className="p-4 m-4 h-10 w-100 rounded-lg border border-gray-400 focus:border-gray-800"
        value={searchText}
        onChange={handleSearchChange}
        placeholder="Type anything to search..."
      ></input>
    </div>
  );
};

const BodyComponent = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const RestaurantCardWithBanner = enhancedCard(RestaurantCard);
  const fetchData = async () => {
    const data = await fetch(restaurantsURL);
    const data_json = await data.json();
    const restaurentData =
      data_json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    console.log("Fetched Data:", restaurentData);
    setRestaurantData(restaurentData);
    setFilteredData(restaurentData);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleSearchInputChange = (newSearchText) => {
    setSearchText(newSearchText);
    console.log("Search Text in BodyComponent:", newSearchText);
    const newFilteredData = restaurantData.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(newSearchText.toLowerCase())
    );
    setFilteredData(newFilteredData);
  };

  return (
    <div className="body-container">
      <div className="search-bar">
        <SearchBar
          searchText={searchText}
          onSearchChange={handleSearchInputChange}
        />
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredData.length === 0 ? (
          <Shimmer />
        ) : (
          filteredData.map((restaurant) => (
            <Link
              to={`/restaurant/${restaurant.info.id}`}
              key={restaurant.info.id}
            >
              <RestaurantCardWithBanner resData={restaurant.info} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default BodyComponent;
