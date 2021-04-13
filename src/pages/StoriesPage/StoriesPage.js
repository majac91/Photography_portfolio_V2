import React, { useEffect } from "react";
import StoryCard from "../../components/StoryCard/StoryCard";
import botanisk from "../../images//story1/DSC_0390.jpg";
import mountains from "../../images/DSC_4233.jpg";

const StoriesPage = ({ setContainerClass }) => {
  useEffect(() => {
    setContainerClass("storiesPage");
  }, []);

  return (
    <div className="stories">
      <header className="stories__heading">
        <div className="stories__heading-inner">
          <h1 className="stories__heading-title">STORIES</h1>
          <h2 className="stories__heading-subtitle">
            A journal to share some trips in detail & other creations
          </h2>
        </div>
      </header>
      <main className="container">
        <section className="stories__main">
          <div className="row container">
            <div className="stories__card-outter col">
              <StoryCard
                className="story-card__1"
                src={botanisk}
                url="botanisk"
              />
            </div>
            <div className="stories__card-outter col">
              <StoryCard
                className="story-card__2"
                src={mountains}
                url="where-no-words-are-needed"
              />
            </div>
            <div className="stories__card-outter col">
              <StoryCard className="story-card__3" />
            </div>
          </div>
        </section>
        <section className="stories__main-footer">
          <h4>More stories comming soon...</h4>
        </section>
      </main>
    </div>
  );
};

export default StoriesPage;
