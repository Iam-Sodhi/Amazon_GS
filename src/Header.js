import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
// import img1 from "./images/img1.jpg"
function Header() {
  const [{ basket, user }, dispath] = useStateValue();
  const handleAuthentication = () => {
    if(user){
        auth.signOut();
    }
  }
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header-logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="homepage_photo"
        />
      </Link>

      <div className="header-search">
        <input type="text" className="header-searchInput" />
        <SearchIcon className="header-searchIcon" />
      </div>

      {/* delivery address - option */}
      <div className="header-nav">
        <Link to={!user &&'/login'}>
          <div onClick={handleAuthentication} className="header-option">
            <span className="header-optionLine1">
              Hello, {user? user?.email :"Guest"}
            </span>
            <span className="header-optionLine2">{user ? "Sign Out" : "Sign In"}</span>
          </div>
        </Link>

        <div className="header-option">
          <span className="header-optionLine1">Returns</span>
          <span className="header-optionLine2">& Orders</span>
        </div>
        <Link to="/checkout">
          <div className="header-optionCart">
            <AddShoppingCartIcon fontSize="large" />
            <span className="header-optionLine2 header-Cart">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
