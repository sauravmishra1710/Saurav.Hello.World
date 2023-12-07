import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { FaMapLocationDot } from "react-icons/fa6";

import img1 from "../../img/image_gallery_1/1.jpg";
import img2 from "../../img/image_gallery_1/2.jpg";
import img3 from "../../img/image_gallery_1/3.jpg";
import img4 from "../../img/image_gallery_1/4.jpg";
import img5 from "../../img/image_gallery_1/5.jpg";
import img6 from "../../img/image_gallery_1/6.jpg";
import img7 from "../../img/image_gallery_1/7.jpg";
import img8 from "../../img/image_gallery_1/8.jpg";
import img9 from "../../img/image_gallery_1/9.jpg";
import img10 from "../../img/image_gallery_1/10.jpg";
import img11 from "../../img/image_gallery_1/11.jpg";
import img12 from "../../img/image_gallery_1/12.jpg";
import img13 from "../../img/image_gallery_1/13.jpg";
import img14 from "../../img/image_gallery_1/14.jpg";
import img15 from "../../img/image_gallery_1/15.jpg";
import img16 from "../../img/image_gallery_1/16.jpg";
import img17 from "../../img/image_gallery_1/17.jpg";
import img18 from "../../img/image_gallery_1/18.jpg";
import img19 from "../../img/image_gallery_1/19.jpg";
import img20 from "../../img/image_gallery_1/20.jpg";
import img21 from "../../img/image_gallery_1/21.jpg";
import img22 from "../../img/image_gallery_1/22.jpg";
import img23 from "../../img/image_gallery_1/23.jpg";
import img24 from "../../img/image_gallery_1/24.jpg";
import img25 from "../../img/image_gallery_1/25.jpg";

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
  <p className="legend">
    Lighting the Diya on the ocassion of Diwali... Let there be light
    everywhere...
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/Sambalpur,+Odisha/@21.470398,83.9728832,13z/data=!3m1!4b1!4m6!3m5!1s0x3a21167f047cd9b5:0x7660a40be684d655!8m2!3d21.4668716!4d83.9811665!16zL20vMGNtbHBo?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Sambalpur, Odisha
    </a>{" "}
  </p>,
  "img2",
  <p>
    .. img 3 not in the&nbsp;
    <em>mood</em>
    &nbsp;for games right now
    <br />
    ...
    <br />
    ...
    <br />
    ...
    <br />
    ...
    <br />
    ...
    <br />
    ...
    <br />
    C&#39;mon. Seriously.
  </p>,
  "img4",
  "img5",
  "img6",
];

const pattern = [
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
    rows: 1,
    cols: 2,
  },
  {
    rows: 1,
    cols: 3,
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

export default function MyPixelStories(props) {
  const [ImgIdx, setImgIdx] = useState(0);
  const [showLightBox, setShowLightBox] = useState(false);
  const showLightBoxAndSetIndex = (index) => {
    setImgIdx(index);
    setShowLightBox(true);
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

      {showLightBox && (
        <Lightbox
          mainSrc={images[ImgIdx]}
          nextSrc={images[(ImgIdx + 1) % imgsLength]}
          prevSrc={images[(ImgIdx + imgsLength - 1) % imgsLength]}
          onCloseRequest={() => {
            setShowLightBox(false);
          }}
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
