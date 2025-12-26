import React from 'react';
import './Header.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from 'react-router-dom';
import {useStateValue} from './StateProvider';
import {GetUserName} from './Checkout';
import {auth} from './firebase';
import {signOut} from 'firebase/auth';
import {getCartItemCount} from './Reducer';
function Header() {
  const [{cart, user}] = useStateValue();
  const logHandler = () => {
    if (user) signOut(auth);
  };
  const userName = <GetUserName />;
  return (
    <div className="header rainbow">
      <Link to="/">
        <img
          className="header__logo "
          src="https://i.postimg.cc/d7BHw944/7a3e101c-6c6f-4d35-97d6-a095618a0bba-200x200.png"
          alt="freshPicks"
        ></img>
      </Link>
      <div className="header__search glow">
        <input
          className="header__searchInput glow"
          placeholder="Search"
          type="text"
        ></input>
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && '/login'}>
          <div onClick={logHandler} className="header__option glow">
            <span className="header__optionLineOne">
              Hello {!user ? 'Guest' : userName}!!
            </span>
            <span className="header__optionLineTwo">
              {user ? 'Sign out' : 'Sign in'}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header__option glow">
            <span className="header__optionLineOne">Returns & </span>
            <span className="header__optionLineTwo">Orders</span>
          </div>
        </Link>
        {/* <div className="header__option glow">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Account</span>
        </div> */}
        <Link to="/Checkout">
          <div className="header__optionCart glow">
            <ShoppingCartIcon />
            <span className="header__optionLineTwo header__cartCount">
              {getCartItemCount(cart)}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
