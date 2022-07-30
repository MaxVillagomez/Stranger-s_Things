import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const {
    isLoggedIn,
    setIsLoggedIn,
    setUser,
    setToken,
  } = props; 

    function logOut() {
      delete localStorage.token;
      setToken("");
      setIsLoggedIn(false);
      setUser({});
    }

    return (
      <header className="flex">
        <nav className="nav-flex">
          <h3>
            Stranger's Things
          </h3>
          <div className="nav-links">
            <Link className="none nav-links" to="/">Home</Link>
            <Link className="none" to="/profile">Profile</Link>
            <Link className="none" to="/posts">Posts</Link>
            {
              isLoggedIn 
              ? (<button onClick={logOut}>Logout</button>) 
              : (<Link className="none" to="/login">Login</Link>)
            }
            
          </div>
        </nav>
      </header>
    );
  };

export default Navbar;
