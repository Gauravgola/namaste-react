import RestaurantCard from "./RestaurantCard";
// import resObj from "../utils/data";
import {useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESLIST_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withPromotedlabel } from "./RestaurantCard";
import UserContext from "../utils/userContext";

const Body = () => {
  //Local State Variable - Super Powerful variable



  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState();

  const RestaurantCardPromoted = withPromotedlabel(RestaurantCard);

  // const {listOfRestaurant, filteredRestaurant} = useBody(RESLIST_API);

  console.log("Body Rendered",listOfRestaurant);

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

  
// --------------------------------------Data fetching---------------------------------------------------------
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESLIST_API);
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

  
  // ----------------------------------data fetching closed here-----------------------------------
  
  const onlineStatus = useOnlineStatus();

  if(onlineStatus == false)
   return (
      <h1>
        Looks like you are offline !!! Please check your internet  connection;
      </h1>
   );

   const { loggedInUser, setUserName } = useContext(UserContext);


  // This is called conditional rendering
  // if (listOfRestaurant.length == 0){
  //   return <Shimmer />;
  // }

  return listOfRestaurant.length == 0 ? ( <Shimmer /> 
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input 
            type="text" 
            className="search-box border border-solid border-black mr-4" 
            value={searchText} 
            onChange={(e) => {
              setSearchText(e.target.value);
            }} 
          />
          <button className="bg-green-100 px-3 py-1 rounded-md"
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
        <div className="m-3 p-3 flex items-center">
          <button
            className="filter-btn px-3 py-1 bg-gray-100 rounded-md"
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

        <div className="m-3 p-3 flex items-center">
          <label className="mr-2">User Name</label>
          <input className="border border-black"
           value={loggedInUser}
           onChange={(e) => setUserName(e.target.value)}/>
        </div> 

      </div> 
      <div className="restaurant-container flex flex-wrap">
        {/* <RestaurantCard resData={resObj[0]} />         */}
        {filteredRestaurant.map((restaurant) => {
          console.log("Nnnn",restaurant);
          return (
            <Link 
              key={restaurant.info?.id} 
              to={"/restaurant/" + restaurant.info?.id}>

{/* -----------------------Ye promoted Restaurant ke liye hai------------------------------------ */}
                {
                  restaurant.info.promoted ? (
                  <RestaurantCardPromoted resData={restaurant} />
                  ) :
                  (
                  <RestaurantCard  resData={restaurant} /> 
                  )
                }
{/*---------------------------------------------------------------------------------------------- */}
            </Link>
    
          );
        })}
      </div>
    </div>
  );
};

export default Body;
