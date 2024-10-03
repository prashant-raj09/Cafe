import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our Menu</h1>
      <p className="explore-menu-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aut
        exercitationem nulla itaque quae, a, repellendus corrupti ullam error
        nihil magni illo aperiam molestiae eius sunt ad ipsam iure doloremque.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
            key={index}
            className="explore-menu-list-item"
          >
            <img
              className={category === item.menu_name ? "active" : ""}
              src={item.menu_image}
              alt={item.name}
            />
            <h2>{item.menu_name}</h2>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
