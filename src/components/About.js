import React from "react";

function About({ image = "https://via.placeholder.com/215", about }) {
  return (
    <aside
      style={{ display: "flex", alignItems: "center", marginBottom: "2rem" }}
    >
      <img
        src={image}
        alt="blog logo"
        style={{ borderRadius: "50%", width: "100px", marginRight: "1rem" }}
      />
      <p>{about}</p>
    </aside>
  );
}

export default About;
