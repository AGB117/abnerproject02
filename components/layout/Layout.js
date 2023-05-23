import MainNav from "./MainNav";
import Footer from "./Footer";

function Layout(props) {
  return (
    <div>
      <MainNav />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
