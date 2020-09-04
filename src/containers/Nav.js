import React from "react";
import { Link } from "react-router-dom";
import { isAuthorized } from "../utils/authHelper";

function Nav() {
  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand navbar-item">
        <Link className="navbar-title" to="/">
          acme.co
        </Link>
      </div>
      <div className="navbar-item">
        <div className="buttons">
          {isAuthorized() ? (
            <Link className="button is-primary" to="/logout">
              <strong>Log out</strong>
            </Link>
          ) : (
            <>
              <Link className="button is-primary" to="/signup">
                <strong>Sign up</strong>
              </Link>
              <Link className="button is-primary is-outlined" to="/login">
                Log in
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
