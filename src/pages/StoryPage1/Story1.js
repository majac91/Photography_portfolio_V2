import React, { useEffect } from "react";
import Reveal from "react-reveal/Fade";
import img5 from "../../images/story1/DSC_0390.jpg";
import img6 from "../../images/story1/DSC_0393.jpg";
import img3 from "../../images/story1/DSC_0408.jpg";
import img4 from "../../images/story1/DSC_0410.jpg";
import img1 from "../../images/story1/DSC_0414.jpg";
import img2 from "../../images/story1/DSC_0463.jpg";

const Story1 = ({ setContainerClass }) => {
  useEffect(() => {
    setContainerClass("story1Page");
  }, []);
  return (
    <div className="story1">
      <header className="story1__heading">
        <div className="story1__heading-inner">
          <h1 className="story1__heading-title">BOTANISK</h1>
          <h2 className="story1__heading-subtitle">
            Copenhagen | 19th august, 2018
          </h2>
        </div>
      </header>
      <main className="story1__img-container">
        <Reveal effect="fadeInUp">
          <img className={"story1__img story1__img-img1"} src={img1}></img>
        </Reveal>
        <div className="d-flex">
          <Reveal effect="fadeInUp">
            <img className={"story1__img story1__img-img2"} src={img2}></img>
          </Reveal>
        </div>

        <div className="d-flex center-x">
          <Reveal effect="fadeInUp">
            <img className={"story1__img story1__img-img3"} src={img3}></img>
          </Reveal>
          <Reveal effect="fadeInUp">
            <img className={"story1__img story1__img-img4"} src={img4}></img>
          </Reveal>
        </div>
        <Reveal effect="fadeInUp">
          <img className={"story1__img story1__img-img5"} src={img5}></img>
        </Reveal>
        <div className="d-flex center-x">
          <Reveal effect="fadeInUp">
            <img className={"story1__img story1__img-img6"} src={img6}></img>
          </Reveal>
        </div>
      </main>
    </div>
  );
};

export default Story1;
