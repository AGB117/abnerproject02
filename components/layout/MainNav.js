import Link from "next/link";
import classes from "./MainNav.module.css";
import { ShoppingCart, List } from "@phosphor-icons/react";
import { useSelector } from "react-redux";
import { Fragment, useEffect, useState } from "react";
import CartModal from "../ui/CartModal";

function MainNav(props) {
  //app state
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartItemZero = cartItems.length === 0 ? false : true;

  //component state
  const [mobileNav, setMobileNav] = useState();
  const [navModal, setnavModal] = useState(false);

  // //handlers
  const mobileNavHandler = () => {
    setMobileNav(!mobileNav);
  };

  const autoCloseModalHandler = () => {
    setnavModal(!navModal);
  };

  const openCloseModalHandler = () => {
    setnavModal(!navModal);
  };

  ////////////////////////////////////////////
  //////////////WIDTH CONTROLER///////////////
  ////////////////////////////////////////////
  //I'm proud of this solution!

  const [windowWidth, setWindowWidth] = useState({ width: null }); //state

  useEffect(() => {
    //handler inside useEffect because the window object is only accesible on the client size for nextjs apps.
    const widthHandler = () => {
      setWindowWidth({ width: window.innerWidth });
    };
    //on rezide the function widthHandlrer is run thus updates in real time
    window.addEventListener("resize", widthHandler);
    widthHandler(); //run the widthHandler on mount for initial size
  }, []);

  useEffect(() => {
    //this could be considered the handler for nav modal and the mobileNav
    //I could refactor this but I don't want to
    windowWidth.width <= 1000 ? setMobileNav(true) : null;
    windowWidth.width <= 1000 ? setnavModal(false) : null;
    windowWidth.width >= 1000 ? setMobileNav(false) : null;
    windowWidth.width >= 1000 ? setnavModal(true) : null;
  }, [windowWidth.width]);

  ////////////////CART MODAL///////////////
  const [cartModal, setCartModal] = useState(false);

  const cartModalHandler = () => {
    setCartModal(!cartModal);
  };

  ////////////////////////////////////////
  /////////////////cart scroll///////////

  useEffect(() => {
    //this is only for the cart modal,
    if (cartModal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }

    if (navModal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }

    if (!mobileNav === true) {
      document.body.style.overflow = "scroll";
    }

    if (!mobileNav === true && cartModal === true) {
      document.body.style.overflow = "hidden";
    }

    if (cartModal === true && mobileNav === true) {
      document.body.style.overflow = "hidden";
    }
  }, [cartModal, navModal, windowWidth]);

  ////////////////////////////////////////
  /////////////////cart scroll///////////

  ///states
  console.log(`navModal is open? ${navModal}`);
  console.log(`cartModal is open? ${cartModal}`);
  console.log(`is mobileNav true? ${mobileNav}`);
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

              {/* <li>
                <button
                  onClick={cartModalHandler}
                  className={classes.cartContainer}
                >
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
                {cartModal && <CartModal cartModalChild={cartModalHandler} />}
              </li> */}

              {!mobileNav && (
                <li>
                  {/*create one of these buttons for desktop*/}
                  {/* {mobileNav && (
                  <div> */}

                  <button
                    onClick={cartModalHandler}
                    className={classes.cartContainer}
                  >
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

                  {cartModal && <CartModal cartModalChild={cartModalHandler} />}
                  {/* </div>
                )} */}
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
          {/* //cartdiv */}
          <div>
            {mobileNav && (
              <div>
                <button
                  onClick={cartModalHandler}
                  className={classes.cartContainer}
                >
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

                {cartModal && <CartModal cartModalChild={cartModalHandler} />}
                {/* </div>
                )} */}
              </div>
            )}
          </div>
          {/* //cartdiv */}

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

/*
////////////////////////////
  //////////////////////////
  //live current window size

  //mobilenav
  if (process.browser) {
    console.log(window.innerWidth);
  }


  ////
  const livewidth = useEffect(() => {
    window.innerWidth;
  },[]);
  
  useEffect(() => {
    window.addEventListener("resize", widthHandler);
  }, []);

  const [currentWidth, setCurrentWidth] = useState(livewidth);

  const widthHandler = () => {
    setCurrentWidth(window.innerWidth);
  };




    useEffect(() => {
      currentWidth <= 1000 ? setMobileNav(false) : setMobileNav(true);
      currentWidth <= 1000 ? setnavModal(false) : setnavModal(true);
    }, [currentWidth]);
  
  ///////////////////////////
  //////////////////////
  */
/*
/////////////////////
/////////////////////
// const mobileNavHandler = () => {
  //   setMobileNav(!notMobileNav);
  //   console.log(notMobileNav);
  // };
//////////////////////
//////////////////////////

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

 {(!notMobileNav || navModal) && (
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




  //old code
    // if (cartModal === true || navModal === true) {
    //   document.body.style.overflow = "hidden";
    // }
    // if (cartModal === false && navModal === false) {
    //   document.body.style.overflow = "scroll";
    // }
    

 const [cartModalScroll, setCartModalScroll] = useState(false);
  //need to use filter to determine how many of the same item are in the object
  const cartModalScrollHandler = () => {
    setCartModalScroll(!cartModalScroll);
  };

//old code

/////////////////////////////
//////////////////
*/
