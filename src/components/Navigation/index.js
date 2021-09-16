import React from "react";
import { NavLink } from "react-router-dom";
import generations from "../../constants";
import "./Navigation.css";

function CustomNavLink(props) {
  return (
    <NavLink className="navigation-link" activeClassName="active" {...props}>
      {props.children}
    </NavLink>
  );
}



function Navigation() {
  return (
    <div className="navigation-container">
      <h3 className="navigation-title">Select Gen:</h3>

      <div className="links-container">
        {generations.map((gen, i) => (
          <CustomNavLink exact key={i} to={gen.link}>
            {gen.text}
          </CustomNavLink>
        ))}
      </div>
    </div>
  );
}

export default Navigation;
