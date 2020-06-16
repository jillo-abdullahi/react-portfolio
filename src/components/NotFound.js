import React from "react";
import ImageNotFound from "../static/images/notFound.svg"

const NotFound = () => {
  return (
    <div className="not-found-main">
      <div className="not-found-image">
        <img src={ImageNotFound} alt="not-found"/>
      </div>
      <div className="not-found-message">
        <span>Whoops! Page could not be found.</span>
      </div>

      <div className="not-found-link">
        <a href="/" className="landing-btn waves-effect waves-light btn-large">
          go back
        </a>
      </div>
    </div>
  );
};

export default NotFound;
