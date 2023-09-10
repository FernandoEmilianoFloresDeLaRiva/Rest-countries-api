import React from "react";
import "./Header.module.css";
import moon from "../../assets/moon.svg";

function Header() {
  return (
    <header>
      <h1>Where in the world?</h1>
      <button>
        <img src={moon} alt="moon" />
        Dark Mode
      </button>
    </header>
  );
}

export default Header;
