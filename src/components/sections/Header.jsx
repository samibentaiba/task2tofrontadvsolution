import React from "react";
import "../../index.css"
function Header() {
  return (
    <header
      className="header"
      style={{
        alignSelf: "stretch",
      }}
    >
      <h1
        style={{
          color: "#edc84b",
          textTransform: "uppercase",
          textAlign: "center",
          fontSize: "5.2rem",
          fontWeight: "300",
          letterSpacing: "3px",
          position: "relative",
          width: "100%",
          display: "block",
        }}
      >
        Fast React Pizza Co.
      </h1>
    </header>
  );
}
export default Header;
