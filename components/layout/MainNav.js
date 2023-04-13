import Link from "next/link";
import classes from "./MainNav.module.css";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

function MainNav() {
  return (
    <div className={classes.position}>
      <header className={classes.header}>
        <div className={classes.logo}>
          <Link href="/">
            <img alt="logo" src="/ColorLogoNoBackground.png"></img>
          </Link>
        </div>
        <div>
          <ul>
            <li>
              <Link href="/menu">Menu</Link>
            </li>

            <li>
              <Link href=""> About Us</Link>
            </li>

            <li>
              <Link href="">Locations</Link>
            </li>

            <li>
              <Link href="">
                <button className={classes.orderButton}>Order Now</button>
              </Link>
            </li>

            <li>
              <Link href="">
                <button className={classes.cartContainer}>
                  <ShoppingCartIcon className={classes.cartLogo} />
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default MainNav;
