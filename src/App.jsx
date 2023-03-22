import { useState } from "react";
import Cards from "./components/Cards"
import "./styles/App.css";
import Nav from "./components/Nav";
import MyHeader from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <MyHeader/>
      <Nav/>
      <Cards/>
    </div>
  )
}

export default App;
