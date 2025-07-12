import { useState,useEffect } from "react";
import { restaurantMenuURL } from "./constants";

const useRestaurantMenu = (id)=>{
   const [resInfo,setResInfo] =useState (null);
   useEffect(()=>{
        fetchRestaurantDetails()
    },[]);
   const fetchRestaurantDetails = async () =>{
       const url =restaurantMenuURL+id;
       const data = await fetch(url);
       const data_json = await data.json();
        
        
        setResInfo(data_json);
    }
    return resInfo;
};
export default useRestaurantMenu;