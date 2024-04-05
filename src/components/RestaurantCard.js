import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  // console.log("gaurav", props);
  const { resData } = props;
  // console.log(resData, "gola12", resData?.data);
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwoString,
    deliveryTime,
  } = resData?.data || resData?.info;

  return (
    <div className="restaurant-card m-4 p-4 w-[190px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="res-image rounded-lg w-[160px] h-[150px]"
        alt="Image"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Star</h4>
      <h4>{costForTwoString}</h4>
      <h4>{deliveryTime} Minutes</h4>
    </div>
  );
};

  // Higher Order Component  -- is just normal javascript function

  // input - RestaurantCard ==> RestaurantCardPromoted

  export const withPromotedlabel = (RestaurantCard) => {                       // it takes RestaurantCard as a input
    return (props) => {                                                      // it will return component and this component again return some JSX
      return(
        <div>                                                           
          <label>Promoted</label>
          <RestaurantCard {...props}/>
        </div>
      );
    }; 
  };

export default RestaurantCard;
