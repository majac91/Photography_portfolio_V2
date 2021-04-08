import React from "react";
import Story from "../../components/Story/Story";
import copenhagen from "../../images/DSC_0474.jpg";

const StoriesPage = () => {
  return (
    <div className="stories">
      <div className="stories__heading">
        <div className="stories__heading-inner">
          <h1 className="stories__heading-title">STORIES</h1>
          <h2 className="stories__heading-subtitle">
            A journal to share some trips in detail & other creations
          </h2>
        </div>
      </div>
      <main className="container">
        <section className="stories__main">
          <div className="col">
            <div className="stories__card row">
              <Story
                className="copenhagen"
                src={copenhagen}
                h1={"Copenhagen"}
              />
            </div>
            <div className="stories__card row">
              <Story className="" src={copenhagen} h1={"Copenhagen"} />
            </div>
          </div>
          <div className="col">
            <div className="stories__card row">
              <Story className="" src={copenhagen} h1={"Copenhagen"} />
            </div>
            <div className="stories__card row">
              <Story className="" src={copenhagen} h1={"Copenhagen"} />
            </div>
          </div>
          <div className="col">
            <div className="stories__card row">
              <Story className="" src={copenhagen} h1={"Copenhagen"} />
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
