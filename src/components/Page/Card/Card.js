import React, { useEffect, useState } from "react";
import "./Card.scss";
import "./Card.responsive.scss";
import { useSelector } from "react-redux";
import GE from "../../../images/../images/page/items/Logiq7/devices/brandlogo.svg";
import garanty from "../../../images/page/producers/Garanty.svg";

function Card({ item }) {
  const [tool, setTool] = useState({
    images: [],
    rating: 0,
    sensors: [],
    options: [],
    devices: [],
  });

  const allItems = useSelector(function (state) {
    return state.items;
  });

  useEffect(() => {
    setTool(allItems[0]);
  }, [allItems]);

  return (
    <section className="card-section">
      <div className="card-div">
        <div className="image-div">
          <img src={tool.mainImage} alt="!Failed to open" />
        </div>
        <div className="name-div">
          <div className="producer-div">
            <div className="producer-logo-div">
              <img src={GE} alt={"GE"}></img>
            </div>
          </div>
          <h2 className="title">{tool.name}</h2>
        </div>
        <div className="price-div">
          <h3 className="price">
            {tool.price}
            <span className="price-span">₽ /мec</span>
          </h3>
          <div className="garanty-div">
            <img
              src={garanty}
              alt="your garanty"
              className="garanty-icon"
            ></img>
            <p>Гарантия лучшей цены</p>
          </div>
        </div>
        <div className="button-div">
          <button>Получить КП</button>
        </div>
      </div>
    </section>
  );
}

export default Card;
