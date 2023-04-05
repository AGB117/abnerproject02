import MenuItems from "./MenuItems";
import classes from "./MenuItemList.module.css";

function MenuItemList(props) {
  return (
    <div className={classes.menuItems}>
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
    </div>
  );
}
export default MenuItemList;
