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
    image: "/burger1.webp",
  },
  {
    id: "m2",
    name: "Avocado Burger",
    description: "Has avocado and bacon",
    price: 8.99,
    calories: 599,
    category: "burgers",
    image: "burger2.webp",
  },

  {
    id: "m3",
    name: "Egg Burger",
    description: "Fried egg and bacon",
    price: 6.99,
    calories: 599,
    category: "burgers",
    image: "burger3.webp",
  },
  {
    id: "m4",
    name: "Fries",
    description: "Handcut fresh every day!",
    price: 3.99,
    calories: 400,
    category: "fries",
    image: "fries1.webp",
  },
  {
    id: "m5",
    name: "Sweet Potato Fries",
    description: "Handcut fresh every day. Served with cinnamon butter.",
    price: 3.99,
    calories: 300,
    category: "fries",
    image: "fries2.webp",
  },
  {
    id: "m6",
    name: "Fountain Drink",
    description: "soda",
    price: 1.99,
    calories: 250,
    category: "drinks",
    image: "soda1.webp",
  },

  {
    id: "m7",
    name: "Classic Burger",
    description: "Our classic burger",
    price: 1.99,
    calories: 250,
    category: "burgers",
    image: "/burger5.jpg",
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
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </Head>
      <MenuItemList
        onChangeCategory={onChangeCategoryHandler}
        menuItems={filter}
      />
    </Fragment>
  );
}

export default Menu;
