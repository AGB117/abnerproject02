import MainNav from "./MainNav";
import Footer from "./Footer";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div className={classes.layout}>
      <MainNav />
      <main>{props.children}</main>
      {/* somehow props.children is necesary so use the layout to wrap around components  */}
      <Footer />
    </div>
  );
}

export default Layout;
