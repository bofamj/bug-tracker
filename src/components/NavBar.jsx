import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faIdCard,
  faFilePen,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
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
            <FontAwesomeIcon
              icon={faHouse}
              size="2xl"
              style={{ color: "#f2f2f2" }}
            />
            <span className="nav__name">home</span>
          </Link>
          <Link to="/mainDashBoard/your-issues" className="nav__items">
            <FontAwesomeIcon
              icon={faIdCard}
              size="2xl"
              style={{ color: "#f2f2f2" }}
            />{" "}
            <span className="nav__name">your ticket</span>
          </Link>
          <Link to="/mainDashBoard/create" className="nav__items">
            <FontAwesomeIcon
              icon={faFilePen}
              size="2xl"
              style={{ color: "#f2f2f2" }}
            />
            <span className="nav__name">add ticket</span>
          </Link>
          <Link to="/" className="nav__items" onClick={handileSignOUt}>
            <FontAwesomeIcon
              icon={faArrowRightFromBracket}
              size="2xl"
              style={{ color: "#f2f2f2" }}
            />
            <span className="nav__name">log out</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
//className="btn btn__small "
