import RestaurantCard from "./RestaurantCard";
// import resObj from "../utils/data";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  //Local State Variable - Super Powerful variable

  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  // console.log("Body Rendered");

  // Normal Js Variable
  // let mockData = [
  //   {
  //     type: "restaurant",
  //     data: {
  //       type: "F",
  //       id: "74453",
  //       name: "Domino's Pizza",
  //       uuid: "87727dbd-7f2b-4857-9763-359624165845",
  //       cloudinaryImageId: "bz9zkh2aqywjhpankb07",
  //       cuisines: ["Pizzas"],
  //       costForTwoString: "₹400 FOR TWO",
  //       deliveryTime: 45,
  //       avgRating: "4.1",
  //     },
  //   },
  //   {
  //     type: "restaurant",
  //     data: {
  //       type: "F",
  //       id: "74454",
  //       name: "Alpino's Pizza",
  //       uuid: "87727dbd-7f2b-4857-9763-359624165845",
  //       cloudinaryImageId: "bz9zkh2aqywjhpankb07",
  //       cuisines: ["Pizzas","Veg Rolls"],
  //       costForTwoString: "₹380 FOR TWO",
  //       deliveryTime: 38,
  //       avgRating: "3.8",
  //     },
  //   },
  //   {
  //     type: "restaurant",
  //     data: {
  //       type: "F",
  //       id: "74455",
  //       name: "Mc Donald",
  //       uuid: "87727dbd-7f2b-4857-9763-359624165845",
  //       cloudinaryImageId: "bz9zkh2aqywjhpankb07",
  //       cuisines: ["Burgers","Veg Rolls"],
  //       costForTwoString: "₹280 FOR TWO",
  //       deliveryTime: 18,
  //       avgRating: "4.5",
  //     },
  //   },
  // ];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7192604&lng=77.173582&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log("call",json);
    // This is called optional chaining
    setListOfRestaurant(
      json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  
  // This is called conditional rendering
  // if (listOfRestaurant.length == 0){
  //   return <Shimmer />;
  // }

  return listOfRestaurant.length == 0 ? ( <Shimmer /> 
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input 
            type="text" 
            className="search-box" 
            value={searchText} 
            onChange={(e) => {
              setSearchText(e.target.value);
            }} 
          />
          <button 
            onClick={() => {
            //filter the restaurant cards and update the UI
            // searchText
            // console.log("gola",searchText);
            const filteredRestaurant = listOfRestaurant.filter(
              (res) => res.info?.name.toLowerCase().includes(searchText.toLowerCase())
              
            );
            // console.log("sethi",res);

            setFilteredRestaurant(filteredRestaurant);

            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.2 
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button> 
      </div> 
      <div className="restaurant-container">
        {/* <RestaurantCard resData={resObj[0]} />         */}
        {filteredRestaurant.map((restaurant) => {
          console.log("Nnnn",restaurant);
          return (
            <Link key={restaurant.info?.id} to={"/restaurant/" + restaurant.info?.id}><RestaurantCard  resData={restaurant} /> </Link>
    
          );
        })}
      </div>
    </div>
  );
};

export default Body;
