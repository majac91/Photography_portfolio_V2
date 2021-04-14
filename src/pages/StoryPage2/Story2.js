import React, { useEffect, useRef } from "react";
import Reveal from "react-reveal/Fade";
import { useInView } from "../../hooks/useInView";
//header
import img1 from "../../images/story2/DSC_4212.jpg";

//section 1
import img12 from "../../images/story2/DSC_4283.jpg";
import img13 from "../../images/story2/DSC_4176.jpg";
import img14 from "../../images/story2/DSC_4174.jpg";

//section 2
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

//section 3
import img15 from "../../images/story2/DSC_1349.jpg";
import img16 from "../../images/story2/DSC_1432 2.jpg";
import img17 from "../../images/story2/DSC_1437.jpg";
// import img18 from "../../images/story2/DSC_1485.jpg";
import img19 from "../../images/story2/DSC_1500.jpg";
import img20 from "../../images/story2/DSC_1510.jpg";

const Story2 = ({ setContainerClass }) => {
  useEffect(() => {
    setContainerClass("story1Page");
  }, []);

  const section2Ref = useRef();
  const section3Ref = useRef();
  const section2InView = useInView(section2Ref);
  const section3InView = useInView(section3Ref);

  const cx = require("classnames");

  return (
    <div className={`story2 ${section2InView ? "section2__in-view" : ""}`}>
      <header className="story2__heading">
        <h1 className="story2__heading-title">
          WHERE NO WORDS ARE NEEDED. PLACES TO TOUCH THE SKY.
        </h1>
        <div className="story2__heading-inner">
          <Reveal effect="fadeInUp">
            <img className={"story2__img story2__img-img1"} src={img1} />
          </Reveal>
          <div className="story2__heading-inner__text">
            <h2 className="story2__heading-subtitle">
              Mountain peaks of Serbia | Landscapes
            </h2>
            <p className="story2__heading-p">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p className="story2__heading-p">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p className="story2__heading-p">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>
        </div>
      </header>

      <main className="story2__img-container">
        {/* SECTION 1 */}
        <section className="story2__section-1">
          <Reveal effect="fadeInUp">
            <img className={"story2__img story12__img-img12"} src={img12}></img>
          </Reveal>

          <div className="d-flex center-x space-xl">
            <Reveal effect="fadeInUp">
              <img className={"story2__img story2__img-img13"} src={img13} />
            </Reveal>
            <Reveal effect="fadeInUp">
              <img className={"story2__img story2__img-img14"} src={img14} />
            </Reveal>
          </div>
        </section>

        {/* SECTION 2 */}
        <section ref={section2Ref} className="story2__section-2">
          <div className="d-flex center-x space-xl">
            <Reveal effect="fadeInUp">
              <img className={"story2__img story1__img-img10"} src={img10} />
            </Reveal>
            <Reveal effect="fadeInUp">
              <img className={"story2__img story1__img-img11"} src={img11} />
            </Reveal>
          </div>

          <div className="d-flex">
            <Reveal effect="fadeInUp">
              <img className={"story1__img story1__img-img2"} src={img2} />
            </Reveal>
          </div>

          <div className="story2__masonary center-x ">
            <div className="d-flex col" style={{ flexGrow: "0" }}>
              <Reveal effect="fadeInUp">
                <img className={"story1__img story1__img-img3"} src={img3} />
              </Reveal>
              <Reveal effect="fadeInUp">
                <img className={"story1__img story1__img-img7"} src={img7} />
              </Reveal>
            </div>

            <div className="d-flex col" style={{ flexGrow: "0" }}>
              <Reveal effect="fadeInUp">
                <img className={"story1__img story2__img-img8"} src={img8} />
              </Reveal>
              <Reveal effect="fadeInUp">
                <img className={"story1__img story2__img-img4"} src={img4} />
              </Reveal>
            </div>
          </div>

          <div className="d-flex flex-end space-xl">
            <Reveal effect="fadeInUp">
              <img className={"story1__img story2__img-img5"} src={img5} />
            </Reveal>
          </div>

          <div className="d-flex center-x">
            <Reveal effect="fadeInUp">
              <img className={"story2__img story2__img-img6"} src={img6} />
            </Reveal>
            <Reveal effect="fadeInUp">
              <img className={"story2__img story2__img-img9"} src={img9} />
            </Reveal>
          </div>
        </section>

        {/* SECTION 3 */}
        <section ref={section3Ref} className="story2__section-3">
          <div className="d-flex space-xl">
            <Reveal effect="fadeInUp">
              <img className={"story2__img story2__img-img17"} src={img17} />
            </Reveal>
          </div>
          <div className="d-flex">
            <Reveal effect="fadeInUp">
              <img className={"story2__img story2__img-img16"} src={img16} />
            </Reveal>
          </div>

          <Reveal effect="fadeInUp">
            <img className={"story2__img story2__img-img17"} src={img15} />
          </Reveal>
          <div className="d-flex center-x">
            <Reveal effect="fadeInUp">
              <img className={"story2__img story2__img-img19"} src={img19} />
            </Reveal>
            <Reveal effect="fadeInUp">
              <img className={"story2__img story2__img-img20"} src={img20} />
            </Reveal>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Story2;
