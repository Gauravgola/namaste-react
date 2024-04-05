// import {useState, useEffect } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
// import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {

    // const[resInfo, setResInfo] = useState(null);

    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(0);                    // this is for toggle feature 

    const dummy = "Dummy Data";

    // useEffect(() => {
    //     fetchMenu();
    // },[]);

    // const fetchMenu = async () => {
    //     const data = await fetch( MENU_API + resId);
    //     const json = await data.json();
    //     console.log("asdf",json);
    //     setResInfo(json.data);
    // };

    // MENU_API + resId

    if (resInfo == null) return <Shimmer />;

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    console.log("testing",resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = 
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (c) =>
                c.card?.card?.["@type"] == 
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );

        // console.log("Only",categories);

    return (
        <div className="menu text-center">
            <h1 className="font-bold my-6 text-xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage} </p>
            
            {/** Category Accordians */}
            {categories.map((category, index) => (
                // Controlled Component
                <RestaurantCategory 
                    key={category.card.card.id} 
                    data={category?.card?.card}
                    showItems={index == showIndex ? true : false}
                    setShowIndex={() => setShowIndex(index)}
                    dummy={dummy}
                />
            ))}  



            {/* <h2>Menu</h2>
            <ul>
                { Array.isArray(itemCards) && itemCards.map(item =>
                <li key={item.card.info.id}> 
                    {item.card.info.name} - {"Rs."} - 
                    {item.card.info.defaultPrice/100}
                </li>
                )}  

     --------------------------- Ye niche wala portion alag hai ye commented hi rahega---------------------------               
                <li>{itemCards[2].card.info.name}</li>
                <li>{itemCards[3].card.info.name}</li>
                <li>{itemCards[4].card.info.name}</li>
     -----------------------------------------------------------------------------------------------------------

            </ul> */}
        </div>
    );
};

export default RestaurantMenu;