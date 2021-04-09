import React, { useEffect } from "react";
import Card from "../../components/Card/Card";

import about from "../../images/about-me.jpg";
import card1 from "../../images/card1.jpg";
import card2 from "../../images/Screenshot 2021-04-07 at 10.26.26.png";
import card3 from "../../images/Screenshot 2021-04-07 at 10.26.39.png";
import card4 from "../../images/Screenshot 2021-04-07 at 10.26.45.png";
import card5 from "../../images/Screenshot 2021-04-07 at 10.26.51.png";

const AboutPage = ({ setContainerClass }) => {
  useEffect(() => {
    setContainerClass("aboutPage");
  }, []);
  return (
    <>
      <header className="header-about">
        <h1 className="header-about__heading">About</h1>
      </header>

      <main>
        <section className="about">
          <div className="about__img-wrapper">
            <img className="about__img" src={about} />
          </div>
          <div className="about__text">
            <div className="about__text-outter">
              <h2 className="about__text-outter__title">
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit..." "
              </h2>
              <div className="about__text-inner row">
                <div className="col">
                  <p className="about__text-inner__p">
                    Her approach is based upon the beauty of empty places and
                    the stories that these spaces are telling us through
                    objects, nature or the human relationship with them.
                  </p>
                  <p className="about__text-inner__p">
                    She has a wide range of inspirations, from the street
                    photographers to photojournalists or fashion photographers.
                  </p>
                </div>
                <div className="col">
                  <p className="about__text-inner__p">
                    Her approach is based upon the beauty of empty places and
                    the stories that these spaces are telling us through
                    objects, nature or the human relationship with them.
                  </p>
                  <p className="about__text-inner__p">
                    She has a wide range of inspirations, from the street
                    photographers to photojournalists or fashion photographers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="inspiration">
          <div className="inspiration__heading">
            <h2 className="inspiration__heading-title">Inspiration</h2>
            <h3 className="inspiration__heading-subtitle">
              Some of the photographers I admire
            </h3>
          </div>
          <Card
            photoOnSide="right"
            img={card1}
            className={"card1"}
            subheading="01 — William Eggleston"
            heading="The father of colour photography."
            copy=" © Eggleston Artistic Trust. Courtesy David Zwirner, New
              York/London."
          />
          <Card
            photoOnSide="left"
            img={card2}
            className={"card2"}
            subheading="02 — William Eggleston"
            heading="The father of colour photography."
            copy=" © Eggleston Artistic Trust. Courtesy David Zwirner, New
              York/London."
          />
          <Card
            photoOnSide="right"
            img={card3}
            className={"card3"}
            subheading="03 — William Eggleston"
            heading="The father of colour photography."
            copy=" © Eggleston Artistic Trust. Courtesy David Zwirner, New
              York/London."
          />
          <Card
            photoOnSide="left"
            img={card4}
            className={"card4"}
            subheading="04 — William Eggleston"
            heading="The father of colour photography."
            copy=" © Eggleston Artistic Trust. Courtesy David Zwirner, New
              York/London."
          />
          <Card
            photoOnSide="right"
            img={card5}
            className={"card5"}
            subheading="03 — William Eggleston"
            heading="The father of colour photography."
            copy=" © Eggleston Artistic Trust. Courtesy David Zwirner, New
              York/London."
          />
        </section>
        <section className="authors"></section>
      </main>
    </>
  );
};

export default AboutPage;
