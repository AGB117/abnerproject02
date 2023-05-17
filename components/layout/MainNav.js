import Link from "next/link";
import classes from "./MainNav.module.css";
import { ShoppingCart, List } from "@phosphor-icons/react";
import { useSelector } from "react-redux";
import { Fragment, useEffect, useState } from "react";

function MainNav() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const cartItemZero = cartItems.length === 0 ? false : true;

  const [notMobileNav, setMobileNav] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  // //handlers
  // const mobileNavHandler = () => {
  //   setMobileNav(!notMobileNav);
  //   console.log(notMobileNav);
  // };

  const autoCloseModalHandler = () => {
    setOpenModal(!openModal);
  };

  const openCloseModalHandler = () => {
    setOpenModal(!openModal);
  };
  ////////////////////////////
  //////////////////////////
  //live current window size
  if (process.browser) {
    console.log(window.innerWidth);
  }

  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);

  const widthHandler = () => {
    setCurrentWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", widthHandler);
  }, []);
  ///////////////////////////
  //////////////////////

  useEffect(() => {
    currentWidth >= 1000 ? setMobileNav(true) : setMobileNav(false);
    setOpenModal(false);
  }, [currentWidth]);
  return (
    <Fragment>
      {(notMobileNav || openModal) && (
        <nav className={classes.header}>
          <div className={classes.logo}>
            <Link onClick={autoCloseModalHandler} href="/">
              <img alt="logo" src="/Color logo - no background.png"></img>
            </Link>
          </div>
          <div>
            <ul>
              {""}

              <li>{currentWidth}</li>
              {""}
              <li>
                <Link onClick={autoCloseModalHandler} href="/menu">
                  Menu
                </Link>
              </li>
              <li>
                <Link onClick={autoCloseModalHandler} href="/locations">
                  Locations
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

              <li>
                <Link onClick={autoCloseModalHandler} href="/order">
                  <button className={classes.orderButton}>Order Now</button>
                </Link>
              </li>

              <li>
                <Link onClick={autoCloseModalHandler} href="/">
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
            </ul>
          </div>
        </nav>
      )}

      {!notMobileNav && (
        <div className={classes.mobileNavContainer}>
          <Link className={classes.logoMobile} href="/">
            <img alt="logo" src="/ColorLogoNoBackground.png"></img>
          </Link>
          <button
            className={` ${classes.mobileNav} ${
              notMobileNav && classes.navButtonBackgorund
            }`}
            onClick={openCloseModalHandler}
          >
            <List size={35} color="#212529" weight="regular" />
          </button>
        </div>
      )}
    </Fragment>
  );
}

export default MainNav;

/*
/////////////////////
//////////////////////

render this is we are NOT on mobile
no menu button and no click handlers
{notMobileNav && <nav className={classes.header}>
          <div className={classes.logo}>
            <Link href="/">
              <img alt="logo" src="/Color logo - no background.png"></img>
            </Link>
          </div>
          <div>
            <ul>
              <li>
                <Link href="/menu">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/locations">
                  Locations
                </Link>
              </li>

              <li>
                <Link href="/aboutus">
                  {" "}
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/contactus">
                  Contact Us
                </Link>
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
            </ul>
          </div>
        </nav>}



render this if we are on mobile

 {(!notMobileNav || openModal) && (
        <nav className={classes.header}>
          <div className={classes.logo}>
            <Link onClick={mobileNavHandler} href="/">
              <img alt="logo" src="/Color logo - no background.png"></img>
            </Link>
          </div>
          <div>
            <ul>
              <li>
                <Link onClick={mobileNavHandler} href="/menu">
                  Menu
                </Link>
              </li>
              <li>
                <Link onClick={mobileNavHandler} href="/locations">
                  Locations
                </Link>
              </li>

              <li>
                <Link onClick={mobileNavHandler} href="/aboutus">
                  {" "}
                  About Us
                </Link>
              </li>

              <li>
                <Link onClick={mobileNavHandler} href="/contactus">
                  Contact Us
                </Link>
              </li>

              <li>
                <Link onClick={mobileNavHandler} href="/order">
                  <button className={classes.orderButton}>Order Now</button>
                </Link>
              </li>

              <li>
                <Link onClick={mobileNavHandler} href="/">
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
            </ul>
          </div>
        </nav>
      )}

      <div className={classes.mobileNavContainer}>
        <Link className={classes.logoMobile} href="/">
          <img alt="logo" src="/ColorLogoNoBackground.png"></img>
        </Link>
        <button
          className={` ${classes.mobileNav} ${
            notMobileNav && classes.navButtonBackgorund
          }`}
          onClick={mobileNavHandler}
        >
          <List size={35} color="#212529" weight="regular" />
        </button>
      </div>

/////////////////////////////
//////////////////
*/
