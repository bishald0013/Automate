import React from "react";
import { Link } from "react-router-dom";

const Templates = () => {
  return (
    <div className="container">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            Active
          </a>
        </li>
        <li class="nav-item">
          <Link to='/home' class="nav-link active">
            Login
          </Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Link
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  );
};

export default Templates;
