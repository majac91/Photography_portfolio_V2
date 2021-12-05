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
            <header className="about__header">
                <h1 className="about__header-heading">About</h1>
            </header>

            <main>
                <section className="about about__desktop">
                    <div className="about__img-wrapper">
                        <img className="about__img" src={about} />
                    </div>
                    <div className="about__text">
                        <div className="about__text-outter">
                            <h2 className="about__text-outter__title">
                                Maja Cvetkovic is a software developer based in Serbia, exploring the world through the photographic lens.
                            </h2>
                            <div className="about__text-inner row">
                                <div className="col">
                                    <p className="about__text-inner__p">
                                        Her first curiosity in photography was a desire to encapsulate a feeling. It grew into a love of photography as a medium
                                        that allowed her to step outside her own perspective, and see the world in a new way.
                                    </p>
                                    <p className="about__text-inner__p">
                                        As photography has become an increasingly important part of global culture, her interest in the meaning of photography and the purpose it serves in people’s lives has also grown.
                                    </p>
                                </div>
                                <div className="col">
                                    <p className="about__text-inner__p">
                                        Travelling has only reinforced her curiosity to explore new places. She is drawn to the relationship between architecture & nature through the contrast between light & darkness.</p>
                                    <p className="about__text-inner__p">
                                        She has a wide range of inspirations, from the street photographers to photojournalists and fashion photographers.
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
                        subheading="02 — Alec Soth"
                        heading="On-the-road photography."
                        copy=" © Alec Sot. Mother and Daughter, 2005."
                    />
                    <Card
                        photoOnSide="right"
                        img={card3}
                        className={"card3"}
                        subheading="03 — Annie Leibovitz"
                        heading="The American portrait photographer."
                        copy=" © Annie Leibovitz. Miles Davis, New York City, July,1.1989."
                    />
                    <Card
                        photoOnSide="left"
                        img={card4}
                        className={"card4"}
                        subheading="04 — Joel Meyerowitz"
                        heading="Street -colour- photography."
                        copy=" © Joel Meyerowitz. Camel coat couple in street steam, New York City. 1975."
                    />
                    <Card
                        photoOnSide="right"
                        img={card5}
                        className={"card5"}
                        subheading="05 — Harry Gruyaert"
                        heading="Shapes & light."
                        copy="© Harry Gruyaert. Launderette. Antwerpen,  Flanders, Belgium. 1988."
                    />
                </section>
                <section className="authors"></section>
            </main>
        </>
    );
};

export default AboutPage;
