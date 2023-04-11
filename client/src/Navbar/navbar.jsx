import React from "react";
import { getToken } from "../services/localStorage";
import { removeToken } from "../services/localStorage";
import { Link } from "react-router-dom";

const Navbar = () => {
  const token = getToken();
  console.log(token);

  const handleClick = () => {
    removeToken(token);
  };

  return (
    <header class="p-3 text-bg-dark">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          ></a>

          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/home" class="nav-link px-2 text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/camp" class="nav-link px-2 text-white">
                Campaign
              </Link>
            </li>
            <li>
              <a href="#" class="nav-link px-2 text-white">
                Add Organisation
              </a>
            </li>
            <li>
              <a href="#" class="nav-link px-2 text-white">
                Add Attendees
              </a>
            </li>
            <li>
              <a href="#" class="nav-link px-2 text-white">
                SMTP config
              </a>
            </li>
          </ul>

          {token ? (
            <div>
              <button
                type="button"
                onClick={handleClick}
                class="btn btn-outline-light me-2"
              >
                LogOut
              </button>
            </div>
          ) : (
            <div class="text-end">
              <Link to="/login">
                <button type="button" class="btn btn-outline-light me-2">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button type="button" class="btn btn-warning">
                  Sign-up
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
