import React, { useState } from "react";
import data from "../assets/images.json";
import Modal from "../components/Modal";
import "../components/Modal.css";
import classes from "./Gallery.module.scss";
import { useEffect } from "react";


export const Gallery = () => {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (image, index) => {
    setCurrentIndex(index);
    setClickedImg(image.url);
  };

  const onRotationRightPress = () => {
    const totalLength = data.data.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = data.data[0].url;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data.data.filter((image) => {
      return data.data.indexOf(image) === newIndex;
    });
    const newItem = newUrl[0].url;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const onRotationLeftPress = () => {
    const totalLength = data.data.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = data.data[totalLength - 1].url;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = data.data.filter((image) => {
      return data.data.indexOf(image) === newIndex;
    });
    const newItem = newUrl[0].url;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const title = "Gallery";
  useEffect(() => {
    window.title = title;
  }, [title]);

  return (
    <div>
      <div className={classes.content}>
        <h1>{title}</h1>
      </div>
      <div className={classes.wrapper}>
        {data.data.map((image, index) => {
          return (
            <div key={index} className="wrapper-images">
              <img
                src={image.url}
                alt={image.caption}
                onClick={() => handleClick(image, index)}
              />
              <h2>{image.caption}</h2>
            </div>
          );
        })}
        {clickedImg && (
          <Modal
            clickedImg={clickedImg}
            onRotationRightPress={onRotationRightPress}
            setClickedImg={setClickedImg}
            onRotationLeftPress={onRotationLeftPress}
          />
        )}
      </div>
    </div>
  );
};
