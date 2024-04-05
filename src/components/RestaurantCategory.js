import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex, dummy}) => {
    // const [showItems, setShowItems] = useState(false);        ---> This is for uncontrolled component

    const handleClick = () => {
        // setShowItems(!showItems);
        setShowIndex();                  // this is comes from the parent of RestaurantCategory
    };

    return(
        <div>
            {/** Header */}
            <div className="w-6/12 bg-gray-100 shadow-lg mx-auto my-4 p-3">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-medium text-md">
                    {data.title}  ({data.itemCards.length})
                    </span>
                    <span>⬇</span>
                </div>

                {/** Accordian Body */}
               {showItems && <ItemList items={data.itemCards} dummy={dummy} />}
            </div>
        </div>
    );
};

export default RestaurantCategory;