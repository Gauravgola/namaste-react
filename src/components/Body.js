import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/data";
import { useState } from "react";

const Body = () => {
    
    //Local State Variable - Super Powerful variable

    const [listOfRestaurant,setListOfRestaurant] = useState(resObj);

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


    return (
      <div className="body">
        <div className="filter"> 
        <button className="filter-btn" onClick={() => {
          
            const filteredList = listOfRestaurant.filter(
            (res) => res.data.avgRating > 4
            );
            setListOfRestaurant(filteredList);
        }}
        >
          Top Rated Restaurants</button>
        </div>
        <div className="restaurant-container">
          {/* <RestaurantCard resData={resObj[0]} />         */}
          {
            listOfRestaurant.map((restaurant) => (
              <RestaurantCard key={restaurant.data.id} resData={restaurant} />
            )
            )
          }
        </div>
      </div>
    );
  };


  export default Body;