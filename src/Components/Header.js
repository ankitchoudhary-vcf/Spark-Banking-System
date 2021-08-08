import React from "react";
import { Link } from "react-router-dom";

export const Header = (props) => {
  return (
    <nav
      className="navbar has-background-warning"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <h3 className="title">Banking System</h3>
        </Link>

        <button
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navigation-bar"
          onClick={props.handleBurger}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div id="navigation-bar" className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            Home
          </Link>

          <Link className="navbar-item" to="/customs-details">
            Customers Details
          </Link>

          <div className="navbar-item has-dropdown is-hoverable">
            <div className="navbar-link">More</div>

            <div className="navbar-dropdown">
            <Link className="navbar-item" to="/transfer-amount">Transfer Amount</Link>
              <Link className="navbar-item" to="/transaction-statements">
                Transaction History
              </Link>
              <hr className="navbar-divider" />
              <Link className="navbar-item" to="/about">About</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
