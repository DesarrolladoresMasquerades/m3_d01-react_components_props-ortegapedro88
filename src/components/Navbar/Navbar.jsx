// import React from "react"
import "./Navbar.css";
import NavButton from "./NavButton";

export default function Navbar() {
  return (
    <nav className="Navbar-blue">
      <p>React components and Props</p>
      <NavButton />
      <NavButton message={"Click me for greens"} color={"green"} />
      <NavButton
        message={"Click me for greens"}
        color={"green"}
        linkTo={"www.css-tricks.com"}
      />
    </nav>
  );
}

// export default Navbar
