import { Fragment, useState } from "react";
import MenuItemList from "../../components/menu/MenuItemList";
import Head from "next/head";
import { restaurantMenu } from "../../store/menu";

function Menu(props) {
  const [category, setCategory] = useState("burgers");

  const onChangeCategoryHandler = (cat) => {
    setCategory(cat);
  };

  const filter = restaurantMenu.filter((items) => items.category === category);

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
