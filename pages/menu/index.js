import { Fragment } from "react";
import MenuItemList from "../../components/menu/MenuItemList";

const DUMMY_MENU = [
  {
    id: "m1",
    name: "Western Burger",
    description: "Has onion rings and BBQ sauce",
    price: 4.99,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1299&q=80",
  },
  {
    id: "m2",
    name: "Avocado Burger",
    description: "Has avocado and bacon",
    price: 8.99,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1299&q=80",
  },

  {
    id: "m3",
    name: "Pizza Burger",
    description: "Has marinara sauce and mozarella cheese",
    price: 6.99,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1299&q=80",
  },
];

function Menu(props) {
  return <MenuItemList menuItems={DUMMY_MENU}></MenuItemList>;
}

export default Menu;
