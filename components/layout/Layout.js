import MainNav from "./MainNav";

function Layout(props) {
  return (
    <div>
      <MainNav />
      <main className="">{props.children}</main>
      {/* somehow props.children is necesary so use the layout to wrap around components  */}
    </div>
  );
}

export default Layout;
