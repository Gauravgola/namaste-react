import { CDN_URL } from "../utils/constants";
const ItemList = ({items,dummy}) => {
    console.log(dummy);
    return(
        <div>
            {items.map((item) => (

                <div 
                   key={item.card.info.id}
                   className="p-2 m-2 border-gray-300 border-b-2 text-left flex items-center justify-between"
                >
                    <div className="w-9/12">
                        <div className="py-1">
                            <span>{item.card.info.name}</span>
                            <span> - ₹{
                                item.card.info.price
                                ? item.card.info.price / 100
                                : item.card.info.defaultPrice / 100}
                            </span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-6">
                        <div className="absolute">
                            <button className="p-1 mx-12 bg-black text-white shadow-lg rounded-lg"> Add +</button>
                        </div>
                    <img src={CDN_URL + item.card.info.imageId} className="w-auto" />
                    </div>
                </div>

            ))}
        </div>
    );
};

export default ItemList;