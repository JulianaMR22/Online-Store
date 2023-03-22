import "../styles/Nav.css";

function Nav() {
  return (
    <div>
      {" "}
      <div className="container_header">
        <ul className="list_header">
          <li className="list_anything">Anything</li>
          <li className="list_products">Products</li>
          <li className="list_drinks">Drinks</li>
        </ul>
        <input className="input_header" type="text" placeholder="Search" />
      </div>
    </div>
  );
}

export default Nav;
