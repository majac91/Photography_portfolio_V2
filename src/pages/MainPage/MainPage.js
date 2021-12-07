import React, { useEffect, useLayoutEffect, useState } from "react";
import Parse from "parse";
import { mscConfirm } from "medium-style-confirm";
import "medium-style-confirm/css/msc-style.css";

import Carousel from "../../components/Slider/Slider";
import HeaderMain from "../../components/HeaderMain/HeaderMain";
import GalleryDisplayButtons from "../../components/GalleryDisplayBtns/GalleryDisplayButtons";
import Form from "../../components/Form/Form";
import Gallery from "../../components/Gallery/Gallery";

const MainPage = ({ setContainerClass }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [galleryList, setGalleryList] = useState([]);
  const [viewCategory, setViewCategory] = useState("all");
  const [itemAdded, setItemAdded] = useState(false);

  useLayoutEffect(() => {
    Parse.initialize(
      "vmgVvg3aF82Lhxcm97idm9UCLJGSHcvEzLmXxD22",
      "0ZzBp7Szs8vOyijUakZHud8WaxnT1taYtVKSJ6Ha"
    );
    Parse.serverURL = "https://parseapi.back4app.com/";
  }, []);

  useEffect(() => {
    setContainerClass("mainPage");
  }, []);

  async function retreiveList() {
    const Gallery = Parse.Object.extend("Gallery");
    const query = new Parse.Query(Gallery);
    query.equalTo("home", true);
    const homeQuery = await query.find();

    query.equalTo("home", false);
    const placesQuery = await query.find();

    const destList = [...homeQuery, ...placesQuery];

    const retreivedList = [];

    for (let i = 0; i < destList.length; i++) {
      let object = destList[i];
      let caption = object.get("caption");
      let date = object.get("date");
      let home = object.get("home");
      let photo = object.get("photo").url();
      let id = object.get("photoId");
      let listItem = { caption, date, home, photo, id };
      retreivedList.push(listItem);
    }
    setGalleryList(retreivedList.reverse());
  }

  //load list on page load
  useEffect(() => {
    retreiveList();
  }, []);

  function handleFormOpen() {
    setIsFormOpen((currentOpenState) => !currentOpenState);
  }

  function handleFormSubmit() {
    retreiveList();
    handleFormOpen();
  }

  function handlDisplayCategory(e) {
    setViewCategory(e.target.dataset.param);
  }

  async function handleDeleteItem(id) {
    const Gallery = Parse.Object.extend("Gallery");
    const query = new Parse.Query(Gallery);
    query.equalTo("photoId", id);
    const deleteQuery = await query.find();

    if (
      mscConfirm("Delete photo?", async function () {
        try {
          await deleteQuery[0].destroy();
          console.log("The object was deleted successfully.");
        } catch (e) {
          console.log("Delete failed!", e);
        }
        retreiveList();
      })
    );
  }

  return (
    <>
      <header className="header">
        <Carousel />
        <HeaderMain />
      </header>
      <GalleryDisplayButtons
        onBtnClick={handlDisplayCategory}
        onOpenForm={handleFormOpen}
        isFormOpen={isFormOpen}
      />
      <Form
        onSubmitForm={handleFormSubmit}
        onCloseForm={handleFormOpen}
        isFormOpen={isFormOpen}
        itemAdded={itemAdded}
        setItemAdded={setItemAdded}
      />
      <main className={`gallery container ${viewCategory}`} id="gallery">
        <Gallery galleryList={galleryList} onDeleteItem={handleDeleteItem} />
      </main>
    </>
  );
};

export default MainPage;
