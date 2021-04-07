import React from "react";

const Card = ({ photoOnSide, img, className, subheading, heading, copy }) => {
  return (
    <section className="card__wrapper">
      {photoOnSide === "right" && (
        <div className={`card card__img-right container ${className}`}>
          <div className="card__text">
            <p className="card__text-subheading">{subheading}</p>
            <h2 className="card__text-heading">{heading}</h2>
          </div>
          <div className="card__img-container">
            <img alt="" className="card__img" src={img} />
            <small className="card__credits">{copy}</small>
          </div>
        </div>
      )}

      {photoOnSide === "left" && (
        <div className={`card card__img-left container ${className}`}>
          <div className="card__img-container">
            <img alt="" className="card__img" src={img} />
            <small className="card__credits">{copy}</small>
          </div>
          <div className="card__text">
            <p className="card__text-subheading">{subheading}</p>
            <h2 className="card__text-heading">{heading}</h2>
          </div>
        </div>
      )}
    </section>
  );
};

export default Card;
