import React, { useEffect } from "react";
import Reveal from "react-reveal/Fade";

import img1 from "../../images/story2/DSC_4212.jpg";
import img2 from "../../images/story2/DSC_0054.jpg";
import img3 from "../../images/story2/DSC_0055.jpg";
import img4 from "../../images/story2/DSC_0083.jpg";
import img5 from "../../images/story2/DSC_0084.jpg";
import img6 from "../../images/story2/DSC_0089.jpg";
import img7 from "../../images/story2/DSC_0094.jpg";
import img8 from "../../images/story2/DSC_0107.jpg";
import img9 from "../../images/story2/DSC_0126.jpg";
import img10 from "../../images/story2/DSC_0131.jpg";
import img11 from "../../images/story2/DSC_0180.jpg";

const Story2 = ({ setContainerClass }) => {
  useEffect(() => {
    setContainerClass("story1Page");
  }, []);
  return (
    <div className="story2">
      <header className="story2__heading">
        <h1 className="story2__heading-title">
          WHERE NO WORDS ARE NEEDED. TRIPS TO LAND OF ICE AND FIRE.
        </h1>
        <div className="story2__heading-inner">
          <Reveal effect="fadeInUp">
            <img className={"story2__img story2__img-img1"} src={img1}></img>
          </Reveal>
          <div className="story2__heading-inner__text">
            <h2 className="story2__heading-subtitle">
              Mountain peaks of Serbia | Landscapes
            </h2>
            <p className="story2__heading-p">
              Iceland is an infinite journey where the landscapes are changing
              every minute. From a moss land -with an intensive green colour- to
              a lunar landscape.
            </p>
            <p className="story2__heading-p">
              I lived this trip as an introspective journey, an opportunity to
              appreciate the silence (or a playlist) and different landscapes. A
              place to deal with many of your faces.
            </p>
            <p className="story2__heading-p">
              I cannot forget the feeling to stay near to a big whale, the scare
              of being trapped in a sand storm, the feeling of uncertainly every
              time that we where crossing a river with the car or the weird
              sensation to walk into the mud while we where swimming into a
              volcanic crater.
            </p>
          </div>
        </div>
      </header>
      <main className="story2__img-container">
        <div className="d-flex center-x space-xl">
          <Reveal effect="fadeInUp">
            <img className={"story2__img story1__img-img10"} src={img10}></img>
          </Reveal>
          <Reveal effect="fadeInUp">
            <img className={"story2__img story1__img-img11"} src={img11}></img>
          </Reveal>
        </div>

        <div className="d-flex ">
          <Reveal effect="fadeInUp">
            <img className={"story1__img story1__img-img2"} src={img2}></img>
          </Reveal>
        </div>

        <div className="story2__masonary center-x ">
          <div className="d-flex col" style={{ flexGrow: "0" }}>
            <Reveal effect="fadeInUp">
              <img className={"story1__img story1__img-img3"} src={img3}></img>
            </Reveal>
            <Reveal effect="fadeInUp">
              <img className={"story1__img story1__img-img7"} src={img7}></img>
            </Reveal>
          </div>

          <div className="d-flex col" style={{ flexGrow: "0" }}>
            <Reveal effect="fadeInUp">
              <img className={"story1__img story2__img-img8"} src={img8}></img>
            </Reveal>
            <Reveal effect="fadeInUp">
              <img className={"story1__img story2__img-img4"} src={img4}></img>
            </Reveal>
          </div>
        </div>

        <div className="d-flex flex-end space-xl">
          <Reveal effect="fadeInUp">
            <img className={"story1__img story2__img-img5"} src={img5}></img>
          </Reveal>
        </div>

        <div className="d-flex center-x">
          <Reveal effect="fadeInUp">
            <img className={"story2__img story2__img-img6"} src={img6}></img>
          </Reveal>
          <Reveal effect="fadeInUp">
            <img className={"story2__img story2__img-img9"} src={img9}></img>
          </Reveal>
        </div>
      </main>
    </div>
  );
};

export default Story2;
