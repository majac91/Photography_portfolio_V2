import React from "react";
import { Link } from "react-router-dom";

const Story = ({ className, src }) => {
  return (
    <div className={`story ${className}`}>
      <Link to={`/${className}`} className={"story__link"}>
        {className === "copenhagen" && (
          <div className="story__inner">
            <h2 className="story__inner-title heading-xl">Botanisk</h2>
            <div className="story__inner-subtitle">
              <h3>Copenhagen</h3>
              <h3>Denmark</h3>
            </div>
            <img className="story__inner-img" src={src} alt="copenhagen" />
          </div>
        )}
      </Link>
      <button className="story__btn">View more</button>
    </div>
  );
};

export default Story;
