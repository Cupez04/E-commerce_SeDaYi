import React, { useRef, useEffect, useState } from "react";
import "./header.css";
import logo from "../../assets/images/eco-logo.png";
import { Container, Row } from "reactstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import userIcon from "../../assets/images/user-icon.png";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import useAuth from "../../custom-hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import { toast } from "react-toastify";


const nav__links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const [menuActive, setMenuActive] = useState(false);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const { currentUser } = useAuth();
  const [isProfileActionsVisible, setIsProfileActionsVisible] = useState(false);

  const toggleProfileActions = () => {
    setIsProfileActionsVisible(!isProfileActionsVisible);
  };

  const handleImageClick = () => {
    toggleProfileActions();
  };

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  const Logout = () => {
    signOut(auth).then(() => {
      toast.success('Logged Out');
      navigate('/home')
    }).catch(err => {
      toast.error(err.message);
    } )
  }

  useEffect(() => {
    stickyHeaderFunc();

    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });

  const menuToggle = () => {
    setMenuActive(!menuActive);
  };
  const navigateToCart = () => {
    navigate("/cart");
  };


  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="..." />
              <div>
                <h1>SeDaYi</h1>
              </div>
            </div>
            <div
              className={`navigation ${menuActive ? "active__menu" : ""}`}
              ref={menuRef}
            >
              <ul className="menu">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : ""
                      }
                      to={item.path}
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav__icons">
              <span className="fav__icon">
                <i class="ri-heart-line"></i>
                <span className="badge">1</span>
              </span>
              <span className="cart__icon" onClick={navigateToCart}>
                <i class="ri-shopping-bag-3-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>

              <div className="profile">
      <motion.img
        whileTap={{ scale: 1.1 }}
        src={currentUser ? currentUser.photoURL : userIcon}
        alt=""
        onClick={handleImageClick}
      />
      <div className={`profile__actions ${isProfileActionsVisible ? 'show__profileActions' : ''}`}>
        {currentUser ? (
          <span onClick={Logout}>Logout</span>
        ) : (
          <div>
            <Link to="/signup">SignUp</Link>
            <Link to="/login">Login</Link>
          </div>
        )}
      </div>
    </div>
              <div className="mobile__menu">
                <span onClick={menuToggle}>
                  <i class="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
