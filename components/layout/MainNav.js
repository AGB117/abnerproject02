import Link from "next/link";
import classes from "./MainNav.module.css";
import { ShoppingCart, List } from "@phosphor-icons/react";
import { useSelector } from "react-redux";
import { Fragment, useEffect, useState } from "react";
import CartModal from "../ui/CartModal";

function MainNav(props) {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartItemZero = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const totalCartItems = cartItemZero === 0 ? false : true;

  const [mobileNav, setMobileNav] = useState();
  const [navModal, setnavModal] = useState(false);
  const [windowWidth, setWindowWidth] = useState({ width: null });
  const [cartModal, setCartModal] = useState(false);

  const autoCloseModalHandler = () => {
    setnavModal(!navModal);
  };

  const openCloseModalHandler = () => {
    setnavModal(!navModal);
  };

  const cartModalHandler = () => {
    setCartModal(!cartModal);
  };

  useEffect(() => {
    const widthHandler = () => {
      setWindowWidth({ width: window.innerWidth });
    };

    window.addEventListener("resize", widthHandler);
    widthHandler();
  }, []);

  useEffect(() => {
    windowWidth.width <= 1000 ? setMobileNav(true) : null;
    windowWidth.width <= 1000 ? setnavModal(false) : null;
    windowWidth.width >= 1000 ? setMobileNav(false) : null;
    windowWidth.width >= 1000 ? setnavModal(true) : null;
  }, [windowWidth.width]);

  useEffect(() => {
    if (cartModal === true) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }

    if (navModal === true) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }

    if (!mobileNav === true) {
      document.body.style.overflowY = "scroll";
    }

    if (!mobileNav === true && cartModal === true) {
      document.body.style.overflowY = "hidden";
    }

    if (cartModal === true && mobileNav === true) {
      document.body.style.overflowY = "hidden";
    }
  }, [cartModal, navModal, windowWidth]);

  return (
    <Fragment>
      {(!mobileNav || navModal) && (
        <nav className={classes.header}>
          <div className={classes.logo}>
            <Link onClick={autoCloseModalHandler} href="/">
              <img alt="logo" src="/Color logo - no background.png"></img>
            </Link>
          </div>
          <div>
            <ul>
              {mobileNav && (
                <li>
                  <Link onClick={autoCloseModalHandler} href="/order">
                    <button className={classes.orderButton}>Order Now</button>
                  </Link>
                </li>
              )}

              <li>
                <Link onClick={autoCloseModalHandler} href="/locations">
                  Locations
                </Link>
              </li>

              <li>
                <Link onClick={autoCloseModalHandler} href="/menu">
                  Menu
                </Link>
              </li>

              <li>
                <Link onClick={autoCloseModalHandler} href="/aboutus">
                  About Us
                </Link>
              </li>

              <li>
                <Link onClick={autoCloseModalHandler} href="/contactus">
                  Contact Us
                </Link>
              </li>

              {!mobileNav && (
                <li>
                  <Link onClick={autoCloseModalHandler} href="/order">
                    <button className={classes.orderButton}>Order Now</button>
                  </Link>
                </li>
              )}

              {!mobileNav && (
                <li>
                  <button
                    onClick={cartModalHandler}
                    className={classes.cartContainer}
                  >
                    {totalCartItems && (
                      <div className={classes.totalCartItems}>
                        {cartItemZero}
                      </div>
                    )}
                    <ShoppingCart
                      className={classes.cartLogo}
                      size={30}
                      color="#e7f5ff"
                      weight="regular"
                    />
                  </button>

                  {cartModal && <CartModal cartModalChild={cartModalHandler} />}
                </li>
              )}
            </ul>
          </div>
        </nav>
      )}

      {mobileNav && (
        <div className={classes.mobileNavContainer}>
          <Link className={classes.logoMobile} href="/">
            <img
              alt="logo for mobile nav"
              src="/ColorLogoNoBackground.png"
            ></img>
          </Link>

          <div>
            {mobileNav && (
              <div>
                <button
                  onClick={cartModalHandler}
                  className={classes.cartContainer}
                >
                  {totalCartItems && (
                    <div className={classes.totalCartItems}>{cartItemZero}</div>
                  )}
                  <ShoppingCart
                    className={classes.cartLogo}
                    size={30}
                    color="#e7f5ff"
                    weight="regular"
                  />
                </button>

                {cartModal && <CartModal cartModalChild={cartModalHandler} />}
              </div>
            )}
          </div>

          {cartModal && <CartModal cartModalChild={cartModalHandler} />}

          <div>
            <button
              className={classes.mobileNav}
              alt="navigation button"
              onClick={openCloseModalHandler}
            >
              <List size={35} color="#212529" weight="regular" />
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default MainNav;
