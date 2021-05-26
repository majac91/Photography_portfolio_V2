import React from "react";
import { Link } from "react-router-dom";
import StoryLink from "../../components/StoryLink/StoryLink";

const Story = ({ className, src, url }) => {
  return (
    <div className={`story-card ${className}`}>
      <Link to={`/${url}`} className={`story-card__link ${className}__link`}>
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
              <h3>2 countries</h3>
            </div>
          </div>
        )}
        {className === "story-card__3" && (
          <div className={`story-card__inner ${className}__inner`} src={src}>
            <h2 className={`story-card__inner-title ${className}__inner-title`}>
              <span className={` ${className}__inner-title__span heading-xl`}>
                In real
              </span>
              <span className={` ${className}__inner-title__span heading-xl`}>
                life
              </span>
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
      <Link to={`/${url}`} className="story-card__btn">
        View story
      </Link>
    </div>
  );
};

export default Story;
