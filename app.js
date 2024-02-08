import React from "react";
import ReactDOM from "react-dom/client";
import resObj from "./data";
/** * Header
     -logo
     -Nav Items
        -Home
        -About
        -Cart
 * Body Component
     -Searh Bar
     -Restaurant Container
            - Restaurant Card
                -Image
                -Restaurant Name, Star Rating, Cuisine, Delivery Time
            
 * Footer
     -Copyright
     -Links
     -Reference
     -Contact
 **/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          alt="Logo-Image"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};


const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwoString,
    deliveryTime
  } = resData?.data;


  return (
        <div className="restaurant-card" >
          <img
            className="res-image"
            alt="Image"
            src={
              "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
              cloudinaryImageId
            }
          />
          <h3>{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{avgRating} Star</h4>
          <h4>{costForTwoString}</h4>
          <h4>{deliveryTime} Minutes</h4>
        </div>
  );
};

// console.log(resObj);

const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">Search </div>
      <div className="restaurant-container">
        {/* <RestaurantCard resData={resObj[0]} />         */}
        {
          resObj.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          )
          )
        }
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const test = ReactDOM.createRoot(document.getElementById("root"));
test.render(<AppLayout />);
