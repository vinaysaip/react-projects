import RestaurantCard from "./ReataurantCard";
import restaurentData from "../assets/data";
import { useState } from "react";
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
  const [filteredData, setFilteredData] = useState(restaurentData);
  const handleSearchInputChange = (newSearchText) => {
    setSearchText(newSearchText);
    console.log("Search Text in BodyComponent:", newSearchText);
    const newFilteredData = restaurentData.filter(restaurant => 
      restaurant.info.name.toLowerCase().includes(newSearchText.toLowerCase())
    );
    setFilteredData(newFilteredData);
  };
    return(<div className="body-container">
      
      <div className="search-bar"><SearchBar searchText={searchText} onSearchChange={handleSearchInputChange} /></div>
      <div className="restaurant-list">
      {filteredData.map((restaurant) => (
        <RestaurantCard key={restaurant.info.id} resData = {restaurant.info}/>
      ))}
      
      </div>
    </div>);
}

  export default BodyComponent;