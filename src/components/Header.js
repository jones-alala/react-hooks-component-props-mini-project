import React from "react";

function Header({ name }) {
  return (
    <header style={{ marginBottom: "2rem" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>{name}</h1>
    </header>
  );
}

export default Header;
