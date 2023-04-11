import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const url = "https://www.pabbly.com/connect/integrations/";

  return (
    <div className="container" style={{ marginTop: "5rem" }}>
      <main class="px-3">
        <h1 className="text-white my-4">Welcome to Let's Calendar Clone</h1>
        <p class="lead text-white">
          This is a clone of Let's Calendar where you can automate the creation
          of campaign and upload attendees With
          <Link to={url} state={{ textDecoration: "none" }}>
            <span className="text-white me-3 fw-bold"> Pabbly</span>
          </Link>{" "}
          <br /> to the campaign and send email using sendGrid SMTP services.
        </p>
        <p class="lead my-4">
          <a
            href="#"
            class="btn btn-lg btn-secondary fw-bold border-white bg-white"
          >
            <span className="text-dark">Learn more</span>
          </a>
        </p>
      </main>
    </div>
  );
};

export default Home;
