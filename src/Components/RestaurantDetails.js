import { useEffect,useState } from 'react';
import { useParams } from 'react-router';
import Shimmer from './Shimmer';
import RestaurantMenu from './Menu';

const RestaurantDetails = () =>{
    const [resData, setResData] = useState(null);
    const [menuData, setmenuData] = useState(null);
    const {id} = useParams();
    const fetchRestaurantDetails = async () =>{
       const url = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4700319&lng=78.3534174&restaurantId="+id;
       const data = await fetch(url);
       const data_json = await data.json();
        const resData = data_json?.data?.cards[2]?.card?.card?.info || {};
         const menuData = data_json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
        console.log("Restaurant Data:", resData);
       setmenuData(menuData);
        setResData(resData);
    }
    useEffect(()=>{
        fetchRestaurantDetails()
    },[]);
    if(!resData) return <Shimmer />;
    const {name,avgRating,totalRatingsString,costForTwoMessage,cuisines} = resData || {};
    return(
        <div className='restaurant-details'>
            <h2>{name}</h2>
            <p>{avgRating} ({totalRatingsString}) {costForTwoMessage}</p>
            <p>{cuisines.join('.')}</p>
            <h3>Menu</h3>
            <div className='menu-container'>
            <RestaurantMenu menuItems={menuData}/>
            </div>
        </div>
    )
}

export default RestaurantDetails;