import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "../styles/Cart.css";
import { useState } from "react";

function Cart() {
  const [visibility, setVisibility] = useState(false);

  function changeVisibility() {
    if (visibility === false) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  }

  return (
    <div className="main_cart">
      <FontAwesomeIcon
        className="icon_header"
        icon={faCartShopping}
        onClick={changeVisibility}
      />
      {visibility ? (
        <ul className="shopping_list">
          <li className=""></li>
        </ul>
      ) : null}
    </div>
  );
}

export default Cart;
