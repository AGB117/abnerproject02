import MainNav from "./MainNav";
import Footer from "./Footer";

function Layout(props) {
  return (
    <div>
      <div>
        <MainNav />
        <main>{props.children}</main>
        {/* somehow props.children is necesary so use the layout to wrap around components  */}
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
