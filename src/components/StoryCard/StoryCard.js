import React from "react";
import { Link } from "react-router-dom";

const Story = ({ className, src }) => {
  return (
    <div className={`story-card ${className}`}>
      <Link
        to={`/${className}`}
        className={`story-card__link ${className}__link`}
      >
        {className === "story-card__1" && (
          <div className={`story-card__inner ${className}__inner`} src={src}>
            <h2
              className={`story-card__inner-title ${className}__inner-title heading-xl`}
            >
              Botanisk
            </h2>
            <div
              className={`story-card__inner-subtitle ${className}__inner-subtitle`}
            >
              <h3>Copenhagen</h3>
              <h3>Denmark</h3>
            </div>
            <img
              className={`story-card__inner-img ${className}__inner-img`}
              src={src}
              alt="greenhouse dome"
            />
          </div>
        )}
        {className === "story-card__2" && (
          <div className={`story-card__inner ${className}__inner`} src={src}>
            <img
              className={`story-card__inner-img ${className}__inner-img`}
              src={src}
              alt="mountain landscape in dusk"
            />
            <h2 className={`story-card__inner-title ${className}__inner-title`}>
              Where no words are needed
            </h2>
            <div
              className={`story-card__inner-subtitle ${className}__inner-subtitle`}
            >
              <h3>3 mountains</h3>
              <h3>Serbia</h3>
            </div>
          </div>
        )}
        {className === "story-card__3" && (
          <div className={`story-card__inner ${className}__inner`} src={src}>
            <h2 className={`story-card__inner-title ${className}__inner-title`}>
              <span className="heading-xl">In real</span>
              <br />
              <span className="heading-xl">life</span>
            </h2>
            <div
              className={`story-card__inner-subtitle ${className}__inner-subtitle`}
            >
              <h3>3 mountains</h3>
              <h3>Serbia</h3>
            </div>
          </div>
        )}
      </Link>
      <button className="story-card__btn">View more</button>
    </div>
  );
};

export default Story;
