import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { FaMapLocationDot } from "react-icons/fa6";

import img1 from "../../img/CullinarySpaces/1.png";
import img2 from "../../img/CullinarySpaces/2.png";
import img3 from "../../img/CullinarySpaces/3.png";
import img4 from "../../img/CullinarySpaces/4.png";
import img5 from "../../img/CullinarySpaces/5.png";
import img6 from "../../img/CullinarySpaces/6.png";
import img7 from "../../img/CullinarySpaces/7.png";
import img8 from "../../img/CullinarySpaces/8.png";
import img9 from "../../img/CullinarySpaces/9.png";
import img10 from "../../img/CullinarySpaces/10.png";
import img11 from "../../img/CullinarySpaces/11.png";
import img12 from "../../img/CullinarySpaces/12.png";
import img13 from "../../img/CullinarySpaces/13.png";
import img14 from "../../img/CullinarySpaces/14.png";
import img15 from "../../img/CullinarySpaces/15.png";
import img16 from "../../img/CullinarySpaces/16.png";
import img17 from "../../img/CullinarySpaces/17.png";
import img18 from "../../img/CullinarySpaces/18.png";
import img19 from "../../img/CullinarySpaces/19.png";
import img20 from "../../img/CullinarySpaces/20.png";
import img21 from "../../img/CullinarySpaces/21.png";
import img22 from "../../img/CullinarySpaces/22.png";
import img23 from "../../img/CullinarySpaces/23.png";
import img24 from "../../img/CullinarySpaces/24.png";
import img25 from "../../img/CullinarySpaces/25.png";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
];

const lightBoxCaptions = [
  <p>The Death by Chocolate filled with Bourbon Chips...</p>,
  <p>
    The Mix Veg Paratha, wheat flatbread stuffed with a flavorful & spicy
    mixture of vegetables served with green mint chutney and cubed of butter...{" "}
  </p>,
  <p>
    The Rajma Chawal, a delicious comfort food power packed with a perfect
    combination of carbs & protein...
  </p>,
  <p>
    The Healthy Steak Stir Fry, Grilled chicken breast loaded with extra veggies
    (perfect combination of carrots, peppers, peas, & corn...) served over rice
    for that flavorful and balanced portion...
  </p>,
  <p>The Creamy Spaghetti With Butter Garlic Prawns,</p>,
  "img6",
];

const pattern = [
  {
    rows: 1,
    cols: 1,
  },
  {
    rows: 1,
    cols: 1,
  },
  {
    rows: 1,
    cols: 1,
  },
  {
    rows: 1,
    cols: 2,
  },
  {
    rows: 2,
    cols: 2,
  },
  {
    rows: 1,
    cols: 1,
  },
  {
    rows: 1,
    cols: 1,
  },
  {
    rows: 2,
    cols: 1,
  },
  {
    rows: 1,
    cols: 2,
  },
  {
    rows: 1,
    cols: 1,
  },
  {
    rows: 1,
    cols: 1,
  },
  {
    rows: 1,
    cols: 2,
  },
  {
    rows: 1,
    cols: 1,
  },
  {
    rows: 2,
    cols: 2,
  },
  {
    rows: 1,
    cols: 1,
  },
  {
    rows: 1,
    cols: 1,
  },
  {
    rows: 1,
    cols: 1,
  },
  {
    rows: 1,
    cols: 2,
  },
  {
    rows: 2,
    cols: 1,
  },
  {
    rows: 1,
    cols: 1,
  },
  {
    rows: 1,
    cols: 1,
  },
  {
    rows: 2,
    cols: 1,
  },
  {
    rows: 2,
    cols: 1,
  },
  {
    rows: 1,
    cols: 2,
  },
  {
    rows: 1,
    cols: 1,
  },
];

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function ImageGallery2(props) {
  const [ImgIdx, setImgIdx] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const showLightBoxAndSetIndex = (index) => {
    setImgIdx(index);
    setShowModal(true);
    return;
  };
  const imgsLength = images.length;
  return (
    <>
      <div>
        <button
          type="button"
          style={{
            margin: "10px 10px 10px 0px",
            backgroundColor: "#c770f0",
            color: "#000",
            border: "none",
            borderRadius: "10px",
            boxShadow: "0px 0px 2px 2px #c770f0",
          }}
          onClick={() => showLightBoxAndSetIndex(0)}
        >
          View in Lightbox Mode
        </button>
      </div>
      <ImageList variant="quilted" cols={5} rowHeight={250}>
        {images.map((item, index) => (
          <ImageListItem
            key={images[index]}
            cols={
              pattern[index - Math.floor(index / imgsLength) * imgsLength].cols
            }
            rows={
              pattern[index - Math.floor(index / imgsLength) * imgsLength].rows
            }
            sx={{
              opacity: ".7",
              transition: "opacity .3s linear",
              cursor: "pointer",
              "&:hover": { opacity: 1 },
            }}
          >
            <img
              {...srcset(
                images[index],
                200,
                pattern[index - Math.floor(index / imgsLength) * imgsLength]
                  .rows,
                pattern[index - Math.floor(index / imgsLength) * imgsLength]
                  .cols
              )}
              // alt={item.title}
              loading="lazy"
              onClick={() => showLightBoxAndSetIndex(index)}
            />
            {/* <ImageListItemBar
              title={item.title}
              subtitle={<span>Sub title</span>}
              position="top"
            /> */}
          </ImageListItem>
        ))}
      </ImageList>

      {showModal && (
        <Lightbox
          mainSrc={images[ImgIdx]}
          nextSrc={images[(ImgIdx + 1) % imgsLength]}
          prevSrc={images[(ImgIdx + imgsLength - 1) % imgsLength]}
          onCloseRequest={() => setShowModal(false)}
          onMovePrevRequest={() =>
            setImgIdx((ImgIdx + imgsLength - 1) % imgsLength)
          }
          onMoveNextRequest={() =>
            setImgIdx((ImgIdx + imgsLength + 1) % imgsLength)
          }
          imageCaption={lightBoxCaptions[ImgIdx]}
          onImageLoad={() => {
            // workaround to prevent the issue of infinite spinner on load
            // https://github.com/frontend-collective/react-image-lightbox/issues/589#issuecomment-1159723673
            window.dispatchEvent(new Event("resize"));
          }}
        />
      )}
    </>
  );
}
