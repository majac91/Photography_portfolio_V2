import React from "react";
import { Link } from "react-router-dom";

const Story = ({ className, src }) => {
  return (
    <div className={`story ${className}`}>
      <Link to={`/${className}`} className={"story__link"}>
        {className === "copenhagen" && (
          <div className="story__inner">
            <h2 className="story__title heading-xl">Copenhagen</h2>
            <h3 className="story__subtitle">Denmark</h3>
            <img className="story__img" src={src} alt="copenhagen" />
          </div>
        )}
      </Link>
      <button className="story__btn">View more</button>
    </div>
  );
};

export default Story;
