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
    <div className="restaurant-card">
      <img
        className="res-image"
        alt="Image"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Star</h4>
      <h4>{costForTwoString}</h4>
      <h4>{deliveryTime} Minutes</h4>
    </div>
  );
};

export default RestaurantCard;
