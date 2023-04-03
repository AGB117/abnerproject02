import MainNav from "./MainNav";

function Layout(props) {
  return (
    <div>
      <div>
        <MainNav />
        <main>{props.children}</main>
        {/* somehow props.children is necesary so use the layout to wrap around components  */}
      </div>
    </div>
  );
}

export default Layout;
