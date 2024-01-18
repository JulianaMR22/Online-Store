import "../styles/Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="mainNavbar">
        <ul className="list_navbar">
          <li className="sub_home_navbar sub_list">
            <button className="button">
              Home
              <a href=""></a>
            </button>
          </li>
          <li className="sub_services_navbar sub_list">
            <button className="button">
              Services
              <a href=""></a>
            </button>
          </li>
          <li className="sub_about_navbar sub_list">
            <button className="button">
              About
              <a href=""></a>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
