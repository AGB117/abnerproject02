import Link from "next/link";
import classes from "./MainNav.module.css";
import { ShoppingCart } from "@phosphor-icons/react";

function MainNav() {
  return (
    <header className={classes.header}>
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
            <Link href="/"> About Us</Link>
          </li>

          <li>
            <Link href="/contactus">Contact Us</Link>
          </li>

          <li>
            <Link href="/">
              <button className={classes.orderButton}>Order Now</button>
            </Link>
          </li>

          <li>
            <Link href="/">
              <button className={classes.cartContainer}>
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
    </header>
  );
}

export default MainNav;
