import React from "react";
import { MenusLis } from "../helpers/MenusLis";
import MenuItem from "../components/MenuItem";
import "../styles/Menus.css";

function Menus() {
  return (
    <div className="menus">
      <h1 className="menusTitle">Our News</h1>
      <div className="menusList">
        {MenusLis.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Menus;