import React from "react";
import "./Header.css";
// import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { host } from "../../env";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={host + "/images/logo.png"} alt="divein" />
      </Link>
    </header>
  );
};

export default Header;
