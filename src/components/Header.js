import React from "react";
import Search from "./Search";
function Header({ searchValue }) {
  return (
    <header className="header">
      <h1>Image Gallery</h1>
      {/* <h1>
        <span className="logo" role="img">
          <img src="./img.png" alt="" />
        </span>
        Image Gallery
      </h1>
      <Search searchValue={searchValue} /> */}
    </header>
  );
}

export default Header;
