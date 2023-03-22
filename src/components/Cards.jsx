import { cards } from "../cards";
import "../styles/Cards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Cards() {
  const [Cart, setCart] = useState([]);
  const [cartValue, setCartValue] = useState("");

  const addToCart = () => {
    setCart([...cards, { title, price, description }]);
  };
  return (
    <div className="main_container">
      {cards.map((item) => (
        <div key={item.id} className={`container_cards ${item.class}`}>
          <button className="container_info">
            <h1 className="title_cards">{item.title}</h1>
            <p className="description_cards">{item.description}</p>
            <button className="container_cart" onClick={() => addToCart}>
              ${item.price} 
              <FontAwesomeIcon
                icon={faCartShopping}
                className="icon_cards"
              />{" "}
            </button>
          </button>
        </div>
      ))}
    </div>
  );
}

export default Cards;
