import { useState } from "react";
import Cards from "./components/Cards"
import "./styles/App.css";
import Nav from "./components/Nav";
import MyHeader from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  const [foodFilter, setFoodFilter] = useState("all");

  return (
    <div>
      <Navbar />
      <MyHeader />
      <Nav setFoodFilter={setFoodFilter} />
      <Cards foodFilter={foodFilter} />
    </div>
  );
}

export default App;
