import { LOGO_URL } from "../utils/constants";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

export const Header = () => {

    // let btnName = "login"; before we are using normal variable
    const [btnNameReact, setBtnNameReact] = useState("login");
    // console.log("Header Rendered");
    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);
    console.log(loggedInUser);

    useEffect(() => {
      console.log("useEffect Called");
    },[]);

    return (
      <div className="flex justify-between bg-pink-50 shadow-lg">
        <div className="logo-container">
          <img
            className="logo w-36"
            alt="Logo-Image"
            src={LOGO_URL}
          />
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4" >
            <li className="px-3">online Status:{onlineStatus ? "🟢" : "🔴"}</li>
            <li className="px-3"><Link to="/">Home</Link></li>
            <li className="px-3"><Link to="/about">About Us</Link></li>
            <li className="px-3"><Link to="/contact">Contact Us</Link></li>
            <li className="px-3"><Link to="/grocery">Grocery</Link></li>
            <li className="px-3"><Link to="/cart">Cart</Link></li>
            <button 
              className="login" 
              onClick={() => {
                btnNameReact == "login" ? setBtnNameReact("logout") :setBtnNameReact("login");
              }}
            >
              {btnNameReact}
            </button>
            <li className="px-3 font-bold">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
  };

  // export default Header;