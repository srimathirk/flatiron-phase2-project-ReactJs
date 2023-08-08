import React from "react";
import Search from "./Search";
import { NavLink } from "react-router-dom";
function Header({ searchValue }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          <img src="./img.png" alt="" />
        </span>
        Image Gallery
      </h1>
      <Search searchValue={searchValue} />
      <div className="navbar">
        <NavLink
          to="/"
          exact
          activeStyle={{
            background: "light green",
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/new"
          exact
          activeStyle={{
            background: "light green",
          }}
        >
          {" "}
          New Card
        </NavLink>
        <NavLink
          to="/images"
          exact
          activeStyle={{
            background: "light green",
          }}
        >
          {" "}
          modal image 
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
