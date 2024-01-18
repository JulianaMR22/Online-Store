import { cards } from "../cards";
import "../styles/Cards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Cards({ foodFilter }) {
  const showCards = (item) => (
    <div key={item.id} className={`container_cards ${item.class}`}>
      <button className="container_info">
        <h1 className="title_cards">{item.title}</h1>
        <p className="description_cards">{item.description}</p>
        <button className="container_cart" onClick={() => addToCart}>
          ${item.price}
          <FontAwesomeIcon icon={faCartShopping} className="icon_cards" />{" "}
        </button>
      </button>
    </div>
  );
  return (
    <div className="main_container">
      {foodFilter === "all"
        ? cards.map(showCards)
        : cards.filter((card) => card.type === foodFilter).map(showCards)}
    </div>
  );
}

export default Cards;
