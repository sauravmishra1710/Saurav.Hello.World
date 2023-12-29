import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
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
import img26 from "../../img/image_gallery_1/26.jpg";
import img27 from "../../img/image_gallery_1/27.jpg";
import img28 from "../../img/image_gallery_1/28.jpg";
import img29 from "../../img/image_gallery_1/29.jpg";
import img30 from "../../img/image_gallery_1/30.jpg";
import img31 from "../../img/image_gallery_1/31.jpg";
import img32 from "../../img/image_gallery_1/32.jpg";
import img33 from "../../img/image_gallery_1/33.jpg";
import img34 from "../../img/image_gallery_1/34.jpg";

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
  <p className="legend">
    Going places where I’ve never been...
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/Chikkamagaluru,+Karnataka/@13.3131132,75.7724486,13z/data=!3m1!4b1!4m6!3m5!1s0x3bbad762c8a889dd:0xb3cf49155294be16!8m2!3d13.3161441!4d75.7720439!16s%2Fm%2F02p74m6?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Chikkamagaluru, Karnataka
    </a>{" "}
  </p>,
  <p className="legend">
    Moments, The Sea Beach never dissapoints...
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
    These beams from the sun peeking through the trees had got me fully engaged
    to get the one perfect shot that morning...
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/Coonoor,+Tamil+Nadu/@11.3497857,76.7687327,14z/data=!3m1!4b1!4m6!3m5!1s0x3ba894efa2fd0d5b:0x192d8d872b04dbbb!8m2!3d11.3530022!4d76.7959095!16zL20vMDQxazFi?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Coonoor, Tamil Nadu
    </a>{" "}
  </p>,
  <p className="legend">
    Hills Above, Clouds Below... The clear blue skies, with that kind of cloud
    cover on the hills, this view from the bancoly was breathtakingly beautiful
    and aweinspiring...
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/Coonoor,+Tamil+Nadu/@11.3497857,76.7687327,14z/data=!3m1!4b1!4m6!3m5!1s0x3ba894efa2fd0d5b:0x192d8d872b04dbbb!8m2!3d11.3530022!4d76.7959095!16zL20vMDQxazFi?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Coonoor, Tamil Nadu
    </a>{" "}
  </p>,
  <p className="legend">
    In the process of chosing their best shot, this lovely couple gave me
    mines...
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
    Sitting in the nature's lap, every corner of this small town in the state of
    Kerala is beautiful and picturesque... Situated by the back waters of the
    Vembanad Lake, Kumarakom is amongst the most beautiful place I have ever
    visited... Kumarakom with it's tranquil beauty, is an oppurtuinity to unwind
    and rejuvenate to carry away one's worries...
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
    Captured moments before it started to pourdown heavily with visibility
    almost set to a few meters, I guess I had been lucky to get this beautiful
    shot of pristine beauty giving us the mystical experience of this fairytale
    land...
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/Mattupetty+Lake/@10.1082853,77.1254786,17z/data=!3m1!4b1!4m6!3m5!1s0x3b079d76d10a1101:0x74126ce99bf7e1e7!8m2!3d10.10828!4d77.1280535!16s%2Fg%2F11qg0j8wgv?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Munnar, Kerala
    </a>{" "}
  </p>,
  <p className="legend">
    I always love capturing the Sun... And being an early riser, gives me the
    chance to capture some of the most beautiful dwan time captures & this is
    one of my favourites...
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
    Beach by the countryside is one of the most wonderful experience one can and
    should have...Another one amongst my best, this morning walk shot taken on
    the way to this country side beach (calm & serene) in Southern part of Goa
    gave us the most exciting start to the day...
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/Benaulim,+Goa/@15.2494754,73.9199069,14z/data=!3m1!4b1!4m6!3m5!1s0x3bbfb47ca2407ea3:0xe290e25d4bd138e9!8m2!3d15.2442763!4d73.9389036!16zL20vMDhtMWty?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Benaulim, Goa
    </a>{" "}
  </p>,
  <p className="legend">
    Another one from Kumarakom, on that bright & sunny day just to walk by this
    clam and beautiful lake was an amazing experience. The breathtaking views of
    the serene banks of Vembanad Lake gave us one of our best experiences of
    serenity and joy during that vacation...
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
    Moments of pure relaxation, Wayanad always gives you that experience and
    stopping by this tea estate after that long overnight travel was all worth
    it...
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/Wayanad,+Kerala/@11.7060406,76.077007,15z/data=!3m1!4b1!4m6!3m5!1s0x3ba60aca72a6f31d:0x80f9947968021a09!8m2!3d11.703206!4d76.0833999!16s%2Fg%2F1ptwc5wyr?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Wayanad, Kerala
    </a>{" "}
  </p>,
  <p className="legend">
    This one is just another random shot I keep taking during travel gazing
    outside the window... Seeing this view was just like remembering those
    sketch book scenary drawing back in school...
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/Wayanad,+Kerala/@11.7060406,76.077007,15z/data=!3m1!4b1!4m6!3m5!1s0x3ba60aca72a6f31d:0x80f9947968021a09!8m2!3d11.703206!4d76.0833999!16s%2Fg%2F1ptwc5wyr?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Wayanad, Kerala
    </a>{" "}
  </p>,
  <p className="legend">
    This boat, She was asking to be clicked in the serene soaking up the sun...
    Beautiful...!!!
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
    Crystal clear waters of the sea gently caressing the feet as you sit on the
    rocks or the white sands of the beach, and all you hear is the susurration
    of waves, the St. Mary's Islands is amongst the best beaches in India...
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/St.+Mary's+Islands/@13.3790989,74.6734816,16.39z/data=!4m6!3m5!1s0x3bbcbe9044f0a577:0xd120f0618dd88215!8m2!3d13.379177!4d74.6733436!16s%2Fm%2F02q61cw?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      St. Mary's Islands, Udupi, Karnataka
    </a>{" "}
  </p>,
  <p className="legend">
    These colors, the calmness of the nature and the sea this was the scene the
    day after the Cyclonic Storm Yaas, true to say Mother Nature has her own
    ways of tranquility after a turnmoil. And Yes, this is one of the best views
    of the Sea and the Sun I have ever seen...
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
    Shaped as two semi crescents joined together forming the shape of Om, this
    view of the Om Beach from the hill top was breathtaking... & indeed the{" "}
    <i>best view comes from the hardest climb</i>...
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
    A symbol of purity & divility, the Ganges, She is always as beautiful in
    every terrain it passes through providing some of the most picturesque
    landscapes...
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/Shivpuri,+Uttarakhand/@30.1347258,78.3795224,16z/data=!3m1!4b1!4m6!3m5!1s0x390911322d4ecf01:0x63b65903f64ff174!8m2!3d30.1360412!4d78.3884888!16s%2Fg%2F12qf6znx6?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Shivpuri, Rishikesh, Uttarakhand
    </a>{" "}
  </p>,
  <p className="legend">
    Sunsets are always a thing of beauty & this view of the Ganges, the hills, &
    the city of Haridwar at sunset from the car in the rope way to the Mansa
    Devi temple was serene...
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/Haridwar,+Uttarakhand/@29.9527178,78.0747262,13z/data=!3m1!4b1!4m6!3m5!1s0x3909470eb8ee57c9:0x4e449176a640f5f3!8m2!3d29.9456906!4d78.1642478!16zL20vMDFxNnJi?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Haridwar, Uttarakhand
    </a>{" "}
  </p>,
  <p className="legend">
    Being in a tea garden & sorrounded by millions of tea leaves but finding the
    perfect leaves for that one perfect shot, it was quite a task...
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/Coonoor,+Tamil+Nadu/@11.3497857,76.7687327,14z/data=!3m1!4b1!4m6!3m5!1s0x3ba894efa2fd0d5b:0x192d8d872b04dbbb!8m2!3d11.3530022!4d76.7959095!16zL20vMDQxazFi?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Coonoor, Tamil Nadu
    </a>{" "}
  </p>,
  <p className="legend">
    With calm waters on one side and the lush greenery on the other, the right
    dyke is one of the best places to visit in my city - Sambalpur....
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/Right+Dyke+Road,+Odisha/@21.4748948,83.8298369,12.5z/data=!4m15!1m8!3m7!1s0x3a213bb070ea9a0b:0xd4c8795e091132d2!2sRight+Dyke+Road,+Odisha!3b1!8m2!3d21.4847536!4d83.8279633!16s%2Fg%2F1tdq4f7x!3m5!1s0x3a213bb070ea9a0b:0xd4c8795e091132d2!8m2!3d21.4847536!4d83.8279633!16s%2Fg%2F1tdq4f7x?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Right Dyke Road, Sambalpur, Odisha
    </a>{" "}
  </p>,
  <p className="legend">
    Seeing these colors of the dusk from my hotel room, I remember rushing with
    my camera to the terrace to not miss this one. The riots of colors the
    mother nature showed was nothing less than stunning...
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/Coonoor,+Tamil+Nadu/@11.3497857,76.7687327,14z/data=!3m1!4b1!4m6!3m5!1s0x3ba894efa2fd0d5b:0x192d8d872b04dbbb!8m2!3d11.3530022!4d76.7959095!16zL20vMDQxazFi?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Coonoor, Tamil Nadu
    </a>{" "}
  </p>,
  <p className="legend">
    My love for the views of the dawn time gives me a chance to capture some of
    the most beautiful scenes to start the day with & to do it as
    minimalistically as possible is one of those things I lcan spend hours...
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
    Travelling solo is one of the best things to do, and my love for the dawn
    inspired me to capture the sun rise from the flight. The very idea of
    capturing the sunrise from the high altitudes within the air plane was
    exciting and inspiring. With clouds beneath & clear blue sky above, this is
    one of my best dawn shots. <br />
    Also remember that puzzled look on the air hostess's face seeing me with the
    DSLR in hand and moving around my seat trying to get the right angle...
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/Kempegowda+International+Airport+Bengaluru/@13.1989089,77.7042382,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae1cfe75446265:0x296c70e9a129418e!8m2!3d13.1989089!4d77.7068131!16zL20vMGJmNm15?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      The Skies of Bangaluru, Karnataka
    </a>{" "}
  </p>,
  <p className="legend">
    I felt really lucky seeing the view with clear skies, bright & sunny day,
    excellent views of snowcapped mountains had it all to give me one of my best
    shot till date. The sun lighting up the peaks was just WoW...
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/HIMALAYAN+View+Point/@29.3956768,79.4582812,17z/data=!3m1!4b1!4m6!3m5!1s0x39a0a16b0feefc97:0xb2613f723681f072!8m2!3d29.3956722!4d79.4608561!16s%2Fg%2F11r114gxd6?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Nandadevi Peak from Nanital, Uttarakhand
    </a>{" "}
  </p>,
  <p className="legend">
    The land of salt water crocodiles in one of the finest patches of mangrove
    forest along the eastern coast of India...
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/Bhitarkanika,+Odisha+754248/@20.7215846,86.8535502,15z/data=!3m1!4b1!4m6!3m5!1s0x3a1b9fa84445d08f:0xe0b7fb81f221aef!8m2!3d20.7151469!4d86.8659449!16zL20vMGJ0NDVy?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Bhitarkanika, Odisha
    </a>{" "}
  </p>,
  <p className="legend">
    What a fun filled friday morning it was with the place buzzing with colors,
    smiles, spreading joy & happiness all around...
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/Nandibetta+Sunrise+Viewpoint/@13.3686718,77.6820178,17z/data=!3m1!4b1!4m6!3m5!1s0x3bb1e44f23b770ed:0x98a30c3014825b9e!8m2!3d13.3686666!4d77.6845927!16s%2Fg%2F11g69k1yw1?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Nandi Hills, Bangalore, Karnataka
    </a>{" "}
  </p>,
  <p className="legend">
    A masterpiece of architecture and engineering that is awe-inspiring and a
    testament to the skill and creativity...
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/Konark+Sun+Temple/@19.8876003,86.0919615,17z/data=!3m1!4b1!4m6!3m5!1s0x3a19f2a097819bbf:0xed9983ca391e3247!8m2!3d19.8875953!4d86.0945364!16s%2Fm%2F02rd_67?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Konark Sun Temple, Odisha
    </a>{" "}
  </p>,
  <p className="legend">
    This 700 Year Old Temple in Odisha is a Chamber of Secrets where the
    language of stones, surpasses the language of humans...
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/Konark+Sun+Temple/@19.8876003,86.0919615,17z/data=!3m1!4b1!4m6!3m5!1s0x3a19f2a097819bbf:0xed9983ca391e3247!8m2!3d19.8875953!4d86.0945364!16s%2Fm%2F02rd_67?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Konark Sun Temple, Odisha
    </a>{" "}
  </p>,
  <p className="legend">
    The combination of shades of blue, green, and white is no less than the
    wallpaper stuffs...
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/Coonoor,+Tamil+Nadu/@11.3497857,76.7687327,14z/data=!3m1!4b1!4m6!3m5!1s0x3ba894efa2fd0d5b:0x192d8d872b04dbbb!8m2!3d11.3530022!4d76.7959095!16zL20vMDQxazFi?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Coonoor, Tamil Nadu
    </a>{" "}
  </p>,
  <p className="legend">
    Going places where I’ve never been, another random shot that turned out to
    be one of the best from this trip while experiencing the journey gazing
    outside ...
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/Chikkamagaluru,+Karnataka/@13.3131132,75.7724486,13z/data=!3m1!4b1!4m6!3m5!1s0x3bbad762c8a889dd:0xb3cf49155294be16!8m2!3d13.3161441!4d75.7720439!16s%2Fm%2F02p74m6?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Chikkamagaluru, Karnataka
    </a>{" "}
  </p>,
  <p className="legend">
    Another random shot at a random stop over early in the morning...
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/Chikkamagaluru,+Karnataka/@13.3131132,75.7724486,13z/data=!3m1!4b1!4m6!3m5!1s0x3bbad762c8a889dd:0xb3cf49155294be16!8m2!3d13.3161441!4d75.7720439!16s%2Fm%2F02p74m6?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Chikkamagaluru, Karnataka
    </a>{" "}
  </p>,
  <p className="legend">
    The vibrant colors of the forest, the boat, the lake, and hazily visible
    Munnar town in the far distance... Nature's canvas and melody came together
    to create magic...
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/Mattupetty+Lake/@10.1082853,77.1254786,17z/data=!3m1!4b1!4m6!3m5!1s0x3b079d76d10a1101:0x74126ce99bf7e1e7!8m2!3d10.10828!4d77.1280535!16s%2Fg%2F11qg0j8wgv?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Munnar, Kerala
    </a>{" "}
  </p>,
  <p className="legend">
    Far from the distractions of the cities, visiting the country side is always
    relaxing and stress free. This one day trip was a special one & full of
    memories for us as it happened to be our marriage anniversary. And more so
    now as it turned out to be the last one with my father...
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/Pentha+Sea+Beach/@20.5373024,86.7836693,17z/data=!3m1!4b1!4m14!1m7!3m6!1s0x3a1ba54051d62753:0x22a04437eb04a8e3!2sPentha+Sea+Beach!8m2!3d20.5372974!4d86.7862442!16s%2Fg%2F11qqyl4p8h!3m5!1s0x3a1ba54051d62753:0x22a04437eb04a8e3!8m2!3d20.5372974!4d86.7862442!16s%2Fg%2F11qqyl4p8h?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Pentha, Kendrapara, Odisha
    </a>{" "}
  </p>,
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
    cols: 3,
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
    rows: 1,
    cols: 1,
  },
  {
    rows: 1,
    cols: 1,
  },
  {
    rows: 2,
    cols: 3,
  },
  {
    rows: 1,
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
