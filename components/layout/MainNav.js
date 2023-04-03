import Link from "next/link";
import classes from "./MainNav.module.css";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

function MainNav() {
  return (
    <div className={classes.position}>
      <header className={classes.header}>
        <p className={classes.name}>Name of Restaurant</p>
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
              <div className={classes.cartContainer}>
                <Link href="">
                  <ShoppingCartIcon className={classes.cartLogo} />
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default MainNav;
