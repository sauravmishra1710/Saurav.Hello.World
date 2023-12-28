import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { FaMapLocationDot } from "react-icons/fa6";

import img1 from "../../img/image_gallery_2/1.jpeg";
import img2 from "../../img/image_gallery_2/2.jpeg";
import img3 from "../../img/image_gallery_2/3.jpeg";
import img4 from "../../img/image_gallery_2/4.jpeg";
import img5 from "../../img/image_gallery_2/5.jpeg";
import img6 from "../../img/image_gallery_2/6.jpeg";
import img7 from "../../img/image_gallery_2/7.jpeg";
import img8 from "../../img/image_gallery_2/8.jpeg";
import img9 from "../../img/image_gallery_2/9.jpeg";
import img10 from "../../img/image_gallery_2/10.jpeg";
import img11 from "../../img/image_gallery_2/11.jpeg";
import img12 from "../../img/image_gallery_2/12.jpeg";
import img13 from "../../img/image_gallery_2/13.jpeg";
import img14 from "../../img/image_gallery_2/14.jpeg";
import img15 from "../../img/image_gallery_2/15.jpeg";
import img16 from "../../img/image_gallery_2/16.jpeg";
import img17 from "../../img/image_gallery_2/17.jpeg";
import img18 from "../../img/image_gallery_2/18.jpeg";
import img19 from "../../img/image_gallery_2/19.jpeg";
import img20 from "../../img/image_gallery_2/20.jpeg";
import img21 from "../../img/image_gallery_2/21.jpeg";
import img22 from "../../img/image_gallery_2/22.jpeg";
import img23 from "../../img/image_gallery_2/23.jpeg";
import img24 from "../../img/image_gallery_2/24.jpeg";
import img25 from "../../img/image_gallery_2/25.jpeg";
import img26 from "../../img/image_gallery_2/26.jpeg";
import img27 from "../../img/image_gallery_2/27.jpeg";
import img28 from "../../img/image_gallery_2/28.jpeg";
import img29 from "../../img/image_gallery_2/29.jpeg";
import img30 from "../../img/image_gallery_2/30.jpeg";
import img31 from "../../img/image_gallery_2/31.jpeg";
import img32 from "../../img/image_gallery_2/32.jpeg";
import img33 from "../../img/image_gallery_2/33.jpeg";
import img34 from "../../img/image_gallery_2/34.jpeg";
import img35 from "../../img/image_gallery_2/35.jpeg";
import img36 from "../../img/image_gallery_2/36.jpeg";
import img37 from "../../img/image_gallery_2/37.jpeg";
import img38 from "../../img/image_gallery_2/38.jpeg";

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
  img26,
  img27,
  img28,
  img29,
  img30,
  img31,
  img32,
  img33,
  img34,
  img35,
  img36,
  img37,
  img38,
];

const lightBoxCaptions = [
  <p className="legend">
    One of the best attraction in the ghats of the Ganges in Rishikesh. This
    huge idol of Lord Shiva in the waters of Parmarth Niketan makes the Ganga
    aarti even more beautiful, divine, and the atmosphere even more spiritual...
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/Parmarth+Niketan+-+Ganga+Ghat/@30.1191971,78.3098885,17z/data=!4m14!1m7!3m6!1s0x39091615b6b94e37:0xc4ce4b75dd8890ae!2sParmarth+Niketan+Ashram!8m2!3d30.1191925!4d78.3124634!16s%2Fm%2F09gl0tm!3m5!1s0x3909163e1f87795b:0x583d99f6f80bf433!8m2!3d30.1193589!4d78.3116764!16s%2Fg%2F11c1t4s3xj?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Parmarth Niketan, Rishikesh, Uttarakhand
    </a>{" "}
  </p>,
  <p className="legend">
    White sands and crystal clear blue waters, I wish I could have stayed more
    time on this amazingly beautiful island... The deep sea dive was the best
    thing that happened experiencing the under water marine life...
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/Koh+Khai+Nok/@7.8913316,98.5123908,17z/data=!3m1!4b1!4m6!3m5!1s0x3051cd6da8fc5d77:0xe42447a6056db13f!8m2!3d7.8911825!4d98.5154646!16s%2Fg%2F1td5tlgb?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Koh Khai Nok Islands, Phang-nga, Thailand
    </a>{" "}
  </p>,
  <p className="legend">
    Rejuvenating with its magic elixir, the Phi phi island's picture perfect
    beaches and the vibrant atmosphere made me realize that the destination does
    matter, its not always about the journey only...
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/Phi+Phi+Islands/@7.769568,98.7357164,13z/data=!3m1!4b1!4m6!3m5!1s0x304e20be764e3d0d:0xbf9db8781a549f71!8m2!3d7.740738!4d98.77841!16zL20vMDJidmYz?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Phi Phi Islands, Thailand
    </a>{" "}
  </p>,
  <p className="legend">
    Kumarakom coulld be God's village in the state famously known as the God's
    own country... Be it the beautiful landscapes or the serenity of the
    backwaters this place leaves you with picturesque memories forever...
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/Kumarakom,+Kerala/@9.610431,76.3977661,13z/data=!3m1!4b1!4m6!3m5!1s0x3b0881caaef0a8f7:0xc23075c3529e921!8m2!3d9.6175449!4d76.430095!16zL20vMDR0Nmo4?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Kumarakom, Kerala
    </a>{" "}
  </p>,
  <p className="legend">
    While she waits patiently for the takeoff, this is another one from my solo
    travels, capturing an air plane while being inside another is a rare thing &
    what I love most about this picture is it's symmetry...
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/Rajiv+Gandhi+International+Airport/@17.2402633,78.4268102,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcbbb7fb1d91b45:0x532029ec33eaa851!8m2!3d17.2402633!4d78.4293851!16s%2Fm%2F03nml4n?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Rajiv Gandhi International Airport, Hyderabad, Telangana
    </a>{" "}
  </p>,
  <p className="legend">
    Into the forest through the woods, this was our gateway to the bird
    scantury...
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/Kumarakom,+Kerala/@9.610431,76.3977661,13z/data=!3m1!4b1!4m6!3m5!1s0x3b0881caaef0a8f7:0xc23075c3529e921!8m2!3d9.6175449!4d76.430095!16zL20vMDR0Nmo4?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Kumarakom, Kerala
    </a>{" "}
  </p>,
  <p className="legend">
    A perfect rainbow = A perfect smile & happiness (like that of a child...)
    making everything around dancing to see a view like this...
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/Gopalan+Grandeur,+Hoodi+Main+Rd,+Hudi,+Hoodi,+Bengaluru,+Karnataka+560048/@12.9909812,77.7131459,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae1196bb3db273:0xc9f97c9818e9f551!8m2!3d12.990976!4d77.7157208!16s%2Fg%2F12hsxqjy5?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Bengaluru, Karnataka
    </a>{" "}
  </p>,
  <p className="legend">
    Wow, The excitement and happiness seeing this view from the window was one
    in a million... The picture perfect like a frame this trip was all about me
    and my camera...
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/Mussoorie,+Uttarakhand/@30.4547587,78.0558405,14z/data=!3m1!4b1!4m6!3m5!1s0x3908d0cfa61cda5b:0x197fd47d980e85b1!8m2!3d30.4597892!4d78.0643723!16zL20vMDU0Mjlq?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Mussoorie, Uttarakhand
    </a>{" "}
  </p>,
  <p className="legend">
    This boat with the backdrop, She was asking to be clicked in the serene
    soaking up the sun... Easy on the eye...!!!
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/Gokarna+beach/@14.5192457,74.320429,17z/data=!3m1!4b1!4m6!3m5!1s0x3bbe83fcc39340bd:0x4ba592c32103a881!8m2!3d14.5192405!4d74.3230039!16s%2Fg%2F11tjd1rdnr?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Gokarna, Karnataka
    </a>{" "}
  </p>,
  <p className="legend">
    My first trip with my camera and the excitement to get started was nothing
    less than the joy of a child with a new toy... Capturing the waves can be
    challenging and getting this perfect short that morning I was all over the
    moon...
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/Puri+Beach/@19.8000633,85.8405361,17z/data=!4m15!1m8!3m7!1s0x3a19c4180256e495:0x496a9d8b30c1fad7!2sPuri,+Odisha!3b1!8m2!3d19.8134554!4d85.8312359!16zL20vMDR0cTUy!3m5!1s0x3a19c406abfd8eaf:0x5b6f8b3655a4cf85!8m2!3d19.7999604!4d85.8437984!16s%2Fg%2F11hcb_3z3j?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Puri, Odisha
    </a>{" "}
  </p>,
  <p className="legend">
    A feast for the eye where beauty knows no boundaries...The 1st thought
    seeing this view was like those amazing wallpaper stuffs asking to be
    clicked... Ooty’s emerald paradise...
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/Ooty,+Tamil+Nadu/@11.4118939,76.672822,14z/data=!3m1!4b1!4m6!3m5!1s0x3ba8bd84b5f3d78d:0x179bdb14c93e3f42!8m2!3d11.4102038!4d76.6950324!16s%2Fm%2F012n8khs?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Udhagamandalam, Tamil Nadu
    </a>{" "}
  </p>,
  <p className="legend">
    A classic, a shot that will be in my heart forever, the colors and the
    contrast effect each object in the image creates stood out for me... & the
    chilly winter morning, the mistiness in the environment enhanced the effects
    on the frame...
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/Nainital,+Uttarakhand/@29.3824819,79.4163022,14z/data=!3m1!4b1!4m6!3m5!1s0x39a0a1bc28fd9d61:0x7cae7ba916987db3!8m2!3d29.3924139!4d79.4533773!16zL20vMDE4Y2s5?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Nainital, Uttarakhand
    </a>{" "}
  </p>,
  <p className="legend">
    Nature’s canvas in shades of green, blue, & white, a place where every
    corner is a photographer’s delight....
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/Ooty,+Tamil+Nadu/@11.4118939,76.672822,14z/data=!3m1!4b1!4m6!3m5!1s0x3ba8bd84b5f3d78d:0x179bdb14c93e3f42!8m2!3d11.4102038!4d76.6950324!16s%2Fm%2F012n8khs?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Udhagamandalam, Tamil Nadu
    </a>{" "}
  </p>,
  <p className="legend">
    Lakeside serenity, the first thoughts seeing this view and the house & those
    staying there how lucky they are to be embracing the calmness of the country
    side...
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/Seetha+Devi+Lake/@10.0452728,77.1551299,17z/data=!4m15!1m8!3m7!1s0x3b079faec65a924d:0xde4b92b9c72c2ad1!2sSeetha+Devi+Lake!8m2!3d10.0452728!4d77.1551299!10e5!16s%2Fg%2F11c2r9r70p!3m5!1s0x3b079faec65a924d:0xde4b92b9c72c2ad1!8m2!3d10.0452728!4d77.1551299!16s%2Fg%2F11c2r9r70p?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Munnar, Kerala
    </a>{" "}
  </p>,
  <p className="legend">
    This place was beaming with happiness and smiles all around with children
    playing and dancing to the tunes of nature, couples entwined with hand in
    hand, elderly people embracing the serenity of mother nature, this place had
    something for everyone ...
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/Seetha+Devi+Lake/@10.0452728,77.1551299,17z/data=!4m15!1m8!3m7!1s0x3b079faec65a924d:0xde4b92b9c72c2ad1!2sSeetha+Devi+Lake!8m2!3d10.0452728!4d77.1551299!10e5!16s%2Fg%2F11c2r9r70p!3m5!1s0x3b079faec65a924d:0xde4b92b9c72c2ad1!8m2!3d10.0452728!4d77.1551299!16s%2Fg%2F11c2r9r70p?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Munnar, Kerala
    </a>{" "}
  </p>,
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
    rows: 2,
    cols: 2,
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
    rows: 2,
    cols: 2,
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
    rows: 1,
    cols: 2,
  },
  {
    rows: 1,
    cols: 3,
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
    cols: 2,
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
    rows: 2,
    cols: 2,
  },
  {
    rows: 2,
    cols: 1,
  },
  {
    rows: 2,
    cols: 2,
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
