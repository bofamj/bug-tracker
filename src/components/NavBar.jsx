import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";
import { signOut } from "../features/user/userSlice";
const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //*log out
  const handileSignOUt = () => {
    dispatch(signOut());
    navigate("/");
  };

  /* useEffect(() => {
   
  }, [signOut]); */

  return (
    <div className="nav">
      <div className="nav__logo">
        <img src={logo} alt="logo" className="nav__img" />
      </div>
      <nav className="nav__continer">
        <div className="nav__link">
          <Link to="/mainDashBoard/dash-board" className="nav__items">
            dashboard
          </Link>
          <Link to="/mainDashBoard/your-issues" className="nav__items">
            your ticket
          </Link>
          <Link to="/mainDashBoard/create" className="nav__items">
            creat a ticket
          </Link>
          <Link to="/" className="nav__items" onClick={handileSignOUt}>
            log out
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
//className="btn btn__small "
