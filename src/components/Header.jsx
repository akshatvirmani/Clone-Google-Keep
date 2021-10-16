import React from "react";

function Header() {
  const logo = (
    <img className="photo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaPFl15AoRoHAzyfeAMVrbMI3wctquPUETdw&usqp=CAU"
      alt="logo"
    />
  );
  return (
    <div className="header">
      {logo}
      <h1>Note Keeper</h1>
    </div>
  );
}

export default Header;