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
          <div className={classes.copyright}>
            <p>Copyright 2023 by Burger Place</p>
            <p>All rights reserved.</p>
          </div>
        </div>
        <div>contact column</div>
        <nav>accout links</nav>
        <nav>company about for catering now hiring</nav>
        <nav> help center privacy terms</nav>
      </div>
    </footer>
  );
}

export default Footer;
