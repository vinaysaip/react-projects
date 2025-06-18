import RestaurantCard from "./ReataurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const SearchBar = ({ searchText, onSearchChange}) => {
 
  handleSearchChange = (e) => {
    onSearchChange(e.target.value);
    console.log("Search Text:", searchText);
  }
 return  (<div className="search-bar-container">
      <h1>Search Restaurant or place</h1>
      <input type="text" className="search-box" value={searchText} onChange={handleSearchChange} placeholder="Type anything to search..."></input>
    </div>)
}

const BodyComponent = ()=>{
  const [searchText, setSearchText] = useState("");
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4700319&lng=78.3534174&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const data_json = await data.json();
    const restaurentData = data_json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    console.log("Fetched Data:", restaurentData);
    setRestaurantData(restaurentData);
    setFilteredData(restaurentData);
  };
  useEffect(() => {
    fetchData();
  },[]);
  
  const handleSearchInputChange = (newSearchText) => {
    setSearchText(newSearchText);
    console.log("Search Text in BodyComponent:", newSearchText);
    const newFilteredData = restaurantData.filter(restaurant => 
      restaurant.info.name.toLowerCase().includes(newSearchText.toLowerCase())
    );
    setFilteredData(newFilteredData);
  };
      
    return(<div className="body-container">
      
      <div className="search-bar"><SearchBar searchText={searchText} onSearchChange={handleSearchInputChange} /></div>
      <div className="restaurant-list">
      { filteredData.length === 0 ? (<Shimmer/>):(filteredData.map((restaurant) => (
        <RestaurantCard key={restaurant.info.id} resData = {restaurant.info}/>
      )))}
      
      </div>
    </div>);
}

  export default BodyComponent;