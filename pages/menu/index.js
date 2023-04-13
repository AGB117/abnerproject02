import { Fragment, useState } from "react";
import MenuItemList from "../../components/menu/MenuItemList";

const DUMMY_MENU = [
  {
    id: "m1",
    name: "Western Burger",
    description: "Has onion rings and BBQ sauce",
    price: 4.99,
    calories: 599,
    category: "burgers",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1299&q=80",
  },
  {
    id: "m2",
    name: "Avocado Burger",
    description: "Has avocado and bacon",
    price: 8.99,
    calories: 599,
    category: "burgers",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1299&q=80",
  },

  {
    id: "m3",
    name: "Pizza Burger",
    description: "Has marinara sauce and mozarella cheese",
    price: 6.99,
    calories: 599,
    category: "burgers",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1299&q=80",
  },
  {
    id: "m4",
    name: "Fries",
    description: "Handcut fresh every day!!",
    price: 3.99,
    calories: 400,
    category: "fries",
    image:
      "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
];

// const menuFilterByBurger = DUMMY_MENU.filter(
//   (menu) => menu.category === "burger"
// );
// const menuFilterByFries = DUMMY_MENU.filter(
//   (menu) => menu.category === "fries"
// );

function Menu(props) {
  const [category, setCategory] = useState("fries");

  const onChangeCategoryHandler = (cat) => {
    setCategory(cat);
  };

  const filter = DUMMY_MENU.filter((items) => items.category === category);
  console.log(filter);

  return (
    <MenuItemList
      onChangeCategory={onChangeCategoryHandler}
      menuItems={filter}
    />
  );
}

export default Menu;
