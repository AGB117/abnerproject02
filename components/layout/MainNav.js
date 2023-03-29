import Link from "next/link";
import classes from "./MainNav.module.css";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

function MainNav() {
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.name}>Name of Restaurant</div>
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
                <ShoppingCartIcon style={{ color: "red" }} />
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default MainNav;
