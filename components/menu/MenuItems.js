import classes from "./MenuItems.module.css";

function MenuItemList(props) {
  return (
    <li>
      <div>
        <img className={classes.image} src={props.image}></img>
      </div>
      <div>
        <p>{props.description}</p>
      </div>
    </li>
  );
}

export default MenuItemList;
