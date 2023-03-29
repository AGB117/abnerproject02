import MenuItems from "./MenuItems";

function MenuItemList(props) {
  return (
    <ul>
      {props.menuItems.map((menuItem) => (
        <MenuItems
          key={menuItem.id}
          id={menuItem.id}
          description={menuItem.description}
          price={menuItem.price}
          name={menuItem.name}
          image={menuItem.image}
        />
      ))}
    </ul>
  );
}
export default MenuItemList;
