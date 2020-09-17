import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul className="navigation">
        <Link to="/scroll">
          <li>Infinite Scroll</li>
        </Link>

        <Link to="/usecontext">
          <li>useContext</li>
        </Link>

        <Link to="/usereducer">
          <li>useReducer</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navigation;
