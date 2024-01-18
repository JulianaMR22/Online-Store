import "../styles/Nav.css";

function Nav({ setFoodFilter }) {
  const selectFilter = (filter) => {
    setFoodFilter(filter);
  }
  return (
    <div>
      {" "}
      <div className="container_header">
        <ul className="list_header">
          <li
            className="list_products"
            onClick={() => selectFilter("main course")}
          >
            Main Course
          </li>
          <li className="list_drinks" onClick={() => selectFilter("drinks")}>
            Drinks
          </li>
          <li
            className="list_drinks"
            onClick={() => selectFilter("all")}
          >
            All
          </li>
        </ul>
        {/* <input className="input_header" type="text" placeholder="Search" /> */}
      </div>
    </div>
  );
}

export default Nav;
