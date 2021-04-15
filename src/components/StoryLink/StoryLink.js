import React from "react";
import { Link } from "react-router-dom";

const StoryLink = ({ path, nextStory }) => {
  return (
    <div className="story-link story-link__wrapper col center-x space-xl">
      <p className="story-link__p">Next story</p>
      <Link className="story-link__link" to={`${path}`}>
        {nextStory}
      </Link>
    </div>
  );
};
export default StoryLink;
