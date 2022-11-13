import classes from "./Home.module.scss";
import data from "../assets/images.json";
import { useEffect } from "react";

export const Home = () => {
  const title = "Home";
  useEffect(() => {
    window.title = title;
  }, [title]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.banner}>Banner</div>
      <div className={classes.content}>
        <h1>{title}</h1>
        <p style={{ marginTop: 20, fontSize: 16, color: '#333' }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className={classes.gallery_wrapper}>
        {data.data.slice(0, 4).map((image, index) => {
          return (
            <div key={index} className="wrapper-images">
              <img src={image.url} alt={image.caption} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
