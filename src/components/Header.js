import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {

    // let btnName = "login"; before we are using normal variable
    const [btnNameReact, setBtnNameReact] = useState("login");
    // console.log("Header Rendered");
    const onlineStatus = useOnlineStatus();

    useEffect(() => {
      console.log("useEffect Called");
    },[]);

    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            alt="Logo-Image"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>online Status:{onlineStatus ? "🟢" : "🔴"}</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/grocery">Grocery</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <button 
              className="login" 
              onClick={() => {
                btnNameReact == "login" ? setBtnNameReact("logout") :setBtnNameReact("login");
              }}
            >
              {btnNameReact}
            </button>
          </ul>
        </div>
      </div>
    );
  };

  // export default Header;