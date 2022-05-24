import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import FsLightbox from "fslightbox-react";

import {
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton,
  TumblrShareButton,
} from "react-share";

import closebtn from "../../icons/png/001-cancel-3.png";
import deletebtn from "../../icons/png/delete.png";
import editbtn from "../../icons/png/edit1.png";
import facebookbtn from "../../icons/png/facebook.png";
import twitterbtn from "../../icons/png/twitter.png";
import pinterestbtn from "../../icons/png/pinterest.png";
import tumblrbtn from "../../icons/png/tumblr.png";

export default function Gallery({ galleryList, onDeleteItem }) {
  const [activeItemId, setActiveItemId] = useState();
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 0,
  });

  function handleActiveItem(id) {
    setActiveItemId(id);
  }

  function closeActiveItem() {
    setActiveItemId("");
  }

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }



  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 2, 1515: 4 }}>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={galleryList.map((el) => el.photo)}
        slide={lightboxController.slide}
      />
      <Masonry>
        {galleryList.map((el, key) => {
          return (
            <figure
              key={el.id}
              tabIndex="0"
              className={`gallery-img__container ${
                el.home ? "home" : "places"
                } ${el.id === activeItemId ? "edit__active" : ""}`}
            >
              <div class='gallery-img__inner'>
                <img src={el.photo} alt={el.caption} className="gallery-img" />
                <button
                  className="gallery__view-btn"
                  onClick={() => {
                    openLightboxOnSlide(key + 1);
                  }}
                ></button>
                <button
                  onClick={() => handleActiveItem(el.id)}
                  type="button"
                  tabIndex="0"
                  className="gallery__edit-btn overlay__btn"
                >
                  <img
                    alt="edit"
                    className="gallery__edit-btn-img overlay__btn"
                    src={editbtn}
                  />
                </button>
              </div>
              <div className="gallery-img__overlay">
                <FacebookShareButton url={el.photo}>
                  <img
                    className="overlay__btn"
                    alt="share to facebook"
                    src={facebookbtn}
                  />
                </FacebookShareButton>
                <TwitterShareButton url={el.photo}>
                  <img
                    alt="share to facebook"
                    className="overlay__btn"
                    src={twitterbtn}
                  />
                </TwitterShareButton>
                <PinterestShareButton url={el.photo} media={el.photo}>
                  <img
                    alt="share to pinterest"
                    className="overlay__btn"
                    src={pinterestbtn}
                  />
                </PinterestShareButton>
                <TumblrShareButton url={el.photo}>
                  <img
                    alt="share to tumblr"
                    className="overlay__btn"
                    src={tumblrbtn}
                  />
                </TumblrShareButton>

                <button
                  onClick={() => onDeleteItem(el.id)}
                  className="overlay__delete"
                >
                  <img
                    alt="close edit"
                    className="overlay__btn"
                    src={deletebtn}
                  />
                </button>
                <button
                  type="button"
                  onClick={closeActiveItem}
                  className="overlay__close"
                >
                  <img
                    alt="close edit"
                    className="overlay__btn"
                    src={closebtn}
                  />
                </button>
              </div>
              <figcaption className="caption__container">
                <div className="caption__text">
                  <h2 className="img__caption">{el.caption}</h2>
                  <h3 className="img__date">{el.date}</h3>
                </div>
              </figcaption>
            </figure>
          );
        })}
      </Masonry>
    </ResponsiveMasonry>
  );
}
