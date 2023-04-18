import Link from "next/link";
import classes from "./Footer.module.css";
import {
  TwitterLogo,
  FacebookLogo,
  InstagramLogo,
} from "@phosphor-icons/react";

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={`${classes.grid} ${classes.gridFooter}`}>
        <div>
          <Link href="/">
            <img
              className={classes.footerLogo}
              alt="logo"
              src="/Color logo - no background.png"
            ></img>
          </Link>
          <div>
            <Link href="/">
              <TwitterLogo
                className={classes.socialLogos}
                size={35}
                color="grey"
                weight="fill"
              />
            </Link>
            <Link href="/">
              <FacebookLogo
                className={classes.socialLogos}
                size={35}
                color="grey"
                weight="fill"
              />
            </Link>
            <Link href="/">
              <InstagramLogo
                className={classes.socialLogos}
                size={35}
                color="grey"
                weight="fill"
              />
            </Link>
          </div>
          <div>
            <p>Copyright 2023 by Burger Place</p>
            <p>All rights reserved.</p>
          </div>
        </div>
        <div>
          <h1>Contact us</h1>
          <ul>
            <li> 555 Somewhere St Orlando, Florida 33888</li>
            <li>407-863-5555</li>
            <li>burger.place@burger.com</li>
          </ul>
        </div>
        <nav>
          <h1>Account</h1>
          <ul>
            <li>Log in</li>
            <li>Order</li>
          </ul>
        </nav>
        <nav>
          <h1>About us</h1>
          <ul>
            <li>About Burger Place</li>
            <li>Catering services</li>
          </ul>
        </nav>
        <nav>
          <h1>Help Center</h1>
          <ul>
            <li>Privacy and terms</li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
