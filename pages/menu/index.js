import { Fragment, useEffect, useState } from "react";
import MenuItemList from "../../components/menu/MenuItemList";
import Head from "next/head";

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
      "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
  },

  {
    id: "m3",
    name: "Egg Burger",
    description: "Fried egg and bacon",
    price: 6.99,
    calories: 599,
    category: "burgers",
    image:
      "https://images.unsplash.com/photo-1559067933-0293effe6133?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=937&q=80",
  },
  {
    id: "m4",
    name: "Fries",
    description: "Handcut fresh every day!",
    price: 3.99,
    calories: 400,
    category: "fries",
    image:
      "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: "m5",
    name: "Sweet Potato Fries",
    description: "Handcut fresh every day. Served with cinnamon butter.",
    price: 3.99,
    calories: 300,
    category: "fries",
    image:
      "https://images.unsplash.com/photo-1596097634767-4188de39715f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: "m6",
    name: "Fountain Drink",
    description: "soda",
    price: 1.99,
    calories: 250,
    category: "drinks",
    image:
      "https://images.unsplash.com/photo-1605712916345-6ef6bcc2e29c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
  },
];

// const menuFilterByBurger = DUMMY_MENU.filter(
//   (menu) => menu.category === "burger"
// );
// const menuFilterByFries = DUMMY_MENU.filter(
//   (menu) => menu.category === "fries"
// );

function Menu(props) {
  const [category, setCategory] = useState("burgers");

  const onChangeCategoryHandler = (cat) => {
    // useEffect()
    setCategory(cat);
  };

  const filter = DUMMY_MENU.filter((items) => items.category === category);
  // console.log(filter);

  return (
    <Fragment>
      <Head>
        <title>Burger Place | Menu</title>
      </Head>
      <MenuItemList
        onChangeCategory={onChangeCategoryHandler}
        menuItems={filter}
      />
    </Fragment>
  );
}

export default Menu;
