import { useState, useEffect } from "react";
import { RESLIST_API } from "./constants";


const useBody = (RESLIST_API) => {

    const [listOfRestaurant, setListOfRestaurant] = useState(null);
    const [filteredRestaurant, setFilteredRestaurant] = useState(null);

    useEffect(() => {
          fetchData();
        }, []);
      
        const fetchData = async () => {
          const data = await fetch(RESLIST_API);
          const json = await data.json();
          console.log("call",json);
        //   This is called optional chaining
          setListOfRestaurant(
            json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
          );
          setFilteredRestaurant(
            json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
          );
        };

    return [listOfRestaurant, filteredRestaurant];
};


 export default useBody;