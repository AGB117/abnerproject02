import Link from "next/link";
import classes from "./MainNav.module.css";
import { ShoppingCart, List } from "@phosphor-icons/react";
import { useSelector } from "react-redux";
import { Fragment, useEffect, useState } from "react";

function MainNav() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const cartItemZero = cartItems.length === 0 ? false : true;

  const [notMobileNav, setMobileNav] = useState(true);

  // //handlers
  const mobileNavHandler = () => {
    setMobileNav(!notMobileNav);
    console.log(notMobileNav);
  };

  useEffect(() => {
    window.innerWidth >= 1000 ? setMobileNav(true) : setMobileNav(false);
    console.log(notMobileNav);
    console.log(window.innerWidth);
  }, []);

  // const resizeHandler = () => {
  //   setWindowWidth(resizeEffect);
  // };
  // const resizeEffect = useEffect(() => {
  //   setWindowWidth(window.innerWidth);
  // }, []);

  // const [windowWidth, setWindowWidth] = useState(resizeHandler);

  return (
    <Fragment>
      {notMobileNav && (
        <nav className={classes.header}>
          <div className={classes.logo}>
            <Link href="/">
              <img alt="logo" src="/Color logo - no background.png"></img>
            </Link>
          </div>
          <div>
            <ul>
              <li>
                <Link href="/menu">Menu</Link>
              </li>
              <li>
                <Link href="/locations">Locations</Link>
              </li>

              <li>
                <Link href="/aboutus"> About Us</Link>
              </li>

              <li>
                <Link href="/contactus">Contact Us</Link>
              </li>

              <li>
                <Link href="/order">
                  <button className={classes.orderButton}>Order Now</button>
                </Link>
              </li>

              <li>
                <Link href="/">
                  <button className={classes.cartContainer}>
                    {cartItemZero && (
                      <div className={classes.totalCartItems}>
                        {cartItems.length}
                      </div>
                    )}
                    <ShoppingCart
                      className={classes.cartLogo}
                      size={30}
                      color="#e7f5ff"
                      weight="regular"
                    />
                  </button>
                </Link>
              </li>
              <li></li>
            </ul>
          </div>
        </nav>
      )}
      <button
        onClick={mobileNavHandler}
        className={`${classes.mobileNav} ${
          notMobileNav && classes.navButtonBackgorund
        }`}
      >
        <List size={40} color="#212529" weight="regular" />
      </button>
    </Fragment>
  );
}

export default MainNav;
