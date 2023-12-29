import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { FaMapLocationDot } from "react-icons/fa6";

import img1 from "../../img/image_gallery_2/1.jpg";
import img2 from "../../img/image_gallery_2/2.jpg";
import img3 from "../../img/image_gallery_2/3.jpg";
import img4 from "../../img/image_gallery_2/4.jpg";
import img5 from "../../img/image_gallery_2/5.jpg";
import img6 from "../../img/image_gallery_2/6.jpg";
import img7 from "../../img/image_gallery_2/7.jpg";
import img8 from "../../img/image_gallery_2/8.jpg";
import img9 from "../../img/image_gallery_2/9.jpg";
import img10 from "../../img/image_gallery_2/10.jpg";
import img11 from "../../img/image_gallery_2/11.jpg";
import img12 from "../../img/image_gallery_2/12.jpg";
import img13 from "../../img/image_gallery_2/13.jpg";
import img14 from "../../img/image_gallery_2/14.jpg";
import img15 from "../../img/image_gallery_2/15.jpg";
import img16 from "../../img/image_gallery_2/16.jpg";
import img17 from "../../img/image_gallery_2/17.jpg";
import img18 from "../../img/image_gallery_2/18.jpg";
import img19 from "../../img/image_gallery_2/19.jpg";
import img20 from "../../img/image_gallery_2/20.jpg";
import img21 from "../../img/image_gallery_2/21.jpg";
import img22 from "../../img/image_gallery_2/22.jpg";
import img23 from "../../img/image_gallery_2/23.jpg";
import img24 from "../../img/image_gallery_2/24.jpg";
import img25 from "../../img/image_gallery_2/25.jpg";
import img26 from "../../img/image_gallery_2/26.jpg";
import img27 from "../../img/image_gallery_2/27.jpg";
import img28 from "../../img/image_gallery_2/28.jpg";
import img29 from "../../img/image_gallery_2/29.jpg";
import img30 from "../../img/image_gallery_2/30.jpg";
import img31 from "../../img/image_gallery_2/31.jpg";
import img32 from "../../img/image_gallery_2/32.jpg";
import img33 from "../../img/image_gallery_2/33.jpg";
import img34 from "../../img/image_gallery_2/34.jpg";
import img35 from "../../img/image_gallery_2/35.jpg";
import img36 from "../../img/image_gallery_2/36.jpg";
import img37 from "../../img/image_gallery_2/37.jpg";
import img38 from "../../img/image_gallery_2/38.jpg";

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
      href="https://www.google.com/maps/place/Mattupetty+Lake/@10.1082853,77.1254786,17z/data=!3m1!4b1!4m6!3m5!1s0x3b079d76d10a1101:0x74126ce99bf7e1e7!8m2!3d10.10828!4d77.1280535!16s%2Fg%2F11qg0j8wgv?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Munnar, Kerala
    </a>{" "}
  </p>,
  <p className="legend">
    Paradise on Earth...This place was beaming with happiness and smiles all
    around with children playing and dancing to the tunes of nature, couples
    entwined with hand in hand, elderly people embracing the pristine beauty,
    this place had something for everyone...
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
    Modes of communication in one of the finest patches of mangrove forest along
    the eastern coast of India...
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
    Always fascinated by these kind of photographs with the water bodies
    captured to create a ghost-like effect of the rushing water, my experiments
    with the slow shutter speed certainly paid off that day...
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/Munnar,+Kerala+685612/@10.0806705,77.0538782,15z/data=!3m1!4b1!4m6!3m5!1s0x3b0799794d099a6d:0x63250e5553c7e0c!8m2!3d10.0889333!4d77.0595248!16zL20vMDFydmpi?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Munnar, Kerala
    </a>{" "}
  </p>,
  <p className="legend">
    The swing in the tree stood out in the frame and was calling to be
    clicked...
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/Phuket,+Mueang+Phuket+District,+Phuket+83000,+Thailand/@7.8833484,98.3713689,14z/data=!3m1!4b1!4m6!3m5!1s0x305031fd2d6380a3:0x8df88000bd82f66b!8m2!3d7.8804479!4d98.3922504!16zL20vMGZfcjFf?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Phuket, Thailand
    </a>{" "}
  </p>,
  <p className="legend">
    The perfect scenary, waking up to this view of the sunrise, we couldn't have
    asked for a better way to start our vacation...
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/Swiss+County+Resort/@10.0307563,77.0450843,17z/data=!3m1!4b1!4m9!3m8!1s0x3b0798377ad4defb:0x622348ed1bd6021!5m2!4m1!1i2!8m2!3d10.030751!4d77.0476592!16s%2Fg%2F1thllhyz?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Munnar, Kerala
    </a>{" "}
  </p>,
  <p className="legend">
    Sitting in the nature's lap, every corner of this small town is picturesque
    and this boat quitely resting under the shed, was not to be missed...
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
    Nature's paradise in Gods own country... I just can't put to words the
    excitement, the happiness seeeing this mesmerizing beauty...You have to
    experience Munnar atleast once...
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/Munnar,+Kerala+685612/@10.0806705,77.0538782,15z/data=!3m1!4b1!4m6!3m5!1s0x3b0799794d099a6d:0x63250e5553c7e0c!8m2!3d10.0889333!4d77.0595248!16zL20vMDFydmpi?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Munnar, Kerala
    </a>{" "}
  </p>,
  <p className="legend">
    Eevrything about the place was so energetic for one to be lost in the beauty
    of Phuket’s sun-kissed beaches...
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/Phuket,+Mueang+Phuket+District,+Phuket+83000,+Thailand/@7.8833484,98.3713689,14z/data=!3m1!4b1!4m6!3m5!1s0x305031fd2d6380a3:0x8df88000bd82f66b!8m2!3d7.8804479!4d98.3922504!16zL20vMGZfcjFf?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Phuket, Thailand
    </a>{" "}
  </p>,
  <p className="legend">
    The sun went down but she was all in for a few more clicks...
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/Phuket,+Mueang+Phuket+District,+Phuket+83000,+Thailand/@7.8833484,98.3713689,14z/data=!3m1!4b1!4m6!3m5!1s0x305031fd2d6380a3:0x8df88000bd82f66b!8m2!3d7.8804479!4d98.3922504!16zL20vMGZfcjFf?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Phuket, Thailand
    </a>{" "}
  </p>,
  <p className="legend">
    Another one from the front seat, it's about the journey and the experiences
    that happen on the way while retaining the excitement to get to the
    destination...
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
    Ohh yes, I had to take one shot with full view of the Ram Jhula and it took
    me a while to get this perfect view maintaining the symmetric...
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
    Just like that oil painting... Ooty’s emerald paradise where every view is a
    postcard moment...
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
    Riots of colors...
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/Krabi,+Thailand/@8.0753907,98.3538546,9z/data=!3m1!4b1!4m6!3m5!1s0x30518d792d7f9309:0x10223bc2c364c90!8m2!3d8.1191811!4d99.1013498!16zL20vMDFnOW1m?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Krabi, Thailand
    </a>{" "}
  </p>,
  <p className="legend">
    Lets go for a boat ride... <br />
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
    Another of from my favourites, that morning was a perfect one for me with
    clear view of the hills in the backdrop and the perfect weather to get the
    right color combination for the civil twilight...
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
    The love birds and their moments...
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/Phuket,+Mueang+Phuket+District,+Phuket+83000,+Thailand/@7.8833484,98.3713689,14z/data=!3m1!4b1!4m6!3m5!1s0x305031fd2d6380a3:0x8df88000bd82f66b!8m2!3d7.8804479!4d98.3922504!16zL20vMGZfcjFf?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Phuket, Thailand
    </a>{" "}
  </p>,
  <p className="legend">
    The location of our resort and the short trek to reach the top for sunrise
    was all worth it at the end...
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
    Mumbai - the maximum city, having seen many pictures of the marine drive, I
    always wanted to capture the maximum view of this place...
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/Marine+Dr,+Mumbai/@18.9432162,72.8204234,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7d1e25ee8439d:0x5acd924f2726ad2b!8m2!3d18.9432111!4d72.8229983!16zL20vMDM1Nnls?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Marine drive, Mumbai, Maharashtra
    </a>{" "}
  </p>,
  <p className="legend">
    On our way to Ooty, this is the entry point to the Bandipur Tiger Reserve
    forest which opens up for public at 6:00 am... The wait was worth it all as
    I got to capture some beautiful views of the early dawn...
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/Bandipur,+Karnataka+571126/@11.6660431,76.6197681,15z/data=!3m1!4b1!4m6!3m5!1s0x3ba8adfd4a29090d:0xad56e301cc9c1720!8m2!3d11.6676783!4d76.632607!16s%2Fg%2F1tfjczv5?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Bandipur, Karnataka
    </a>{" "}
  </p>,
  <p className="legend">
    A perfect relaxed evening by the beach was the one we needed...
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/Phuket,+Mueang+Phuket+District,+Phuket+83000,+Thailand/@7.8833484,98.3713689,14z/data=!3m1!4b1!4m6!3m5!1s0x305031fd2d6380a3:0x8df88000bd82f66b!8m2!3d7.8804479!4d98.3922504!16zL20vMGZfcjFf?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Phuket, Thailand
    </a>{" "}
  </p>,
  <p className="legend">
    A not so big waterfall but it remains a good memory for me as it gave me my
    first cotton candy effect with the full view of the falls...
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/Kempty+Falls/@30.4878384,78.0318218,17z/data=!3m1!4b1!4m6!3m5!1s0x3908d19963f63b51:0xaf4d748e3bc60a88!8m2!3d30.4878339!4d78.0366927!16s%2Fg%2F1pxxrv21z?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Kempaty falls, Lakhwad, Ram Gaon, Uttarakhand
    </a>{" "}
  </p>,
  <p className="legend">
    Bangalore skies can weave that magical effect, you just need to get lucky
    and I certainly was that morning to have capture this minimalistically...
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/%E0%B2%AE%E0%B2%B9%E0%B2%A6%E0%B3%87%E0%B2%B5%E0%B2%AA%E0%B3%81%E0%B2%B0%E0%B2%95%E0%B3%86%E0%B2%B0%E0%B3%86+%E0%B2%A8%E0%B2%A1%E0%B3%81%E0%B2%97%E0%B2%A1%E0%B3%8D%E0%B2%A1%E0%B3%86/@12.9858668,77.6894126,17.94z/data=!4m15!1m8!3m7!1s0x3bae116dbf7e22e5:0xfd3df3299cd59775!2sMahadevapura,+Bengaluru,+Karnataka!3b1!8m2!3d12.9879659!4d77.6895248!16zL20vMGY1Z2M4!3m5!1s0x3bae11faa1200f65:0xc552b5eaadb84080!8m2!3d12.9876461!4d77.6922689!16s%2Fg%2F11qsq1z7jd?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Mahadevapura Lake, Bangalore, Karnataka
    </a>{" "}
  </p>,
  <p className="legend">
    The confluence of the 3 holy rivers - The Ganga, The Yamuna, and the
    Saraswati marked by distinct color variations of the waters, the clear blue
    of the Yamuna contrasting with the greenish hue of the Ganges, the mythical
    Saraswati river is believed to flow underground, its presence adds an air of
    mysticism to the place...
    <br />
    The serene and tranquil atmosphere, the gentle breeze, and the soothing sound
    of flowing water creates a peaceful ambiance, instantly putting me at
    ease...
    <br />
    <FaMapLocationDot style={{ fontSize: "1.2em", color: "white" }} />
    &nbsp;
    <a
      href="https://www.google.com/maps/place/Triveni+Sangam,+Prayagraj/@25.4088473,81.8434071,13.38z/data=!4m15!1m8!3m7!1s0x398534c9b20bd49f:0xa2237856ad4041a!2sPrayagraj,+Uttar+Pradesh!3b1!8m2!3d25.4358011!4d81.846311!16zL20vMDIwc2tj!3m5!1s0x399acad16d98ab95:0x43d73eb6d5b82c5!8m2!3d25.4206998!4d81.8901107!16s%2Fg%2F1tcvs7vn?entry=ttu"
      target="_blank"
      rel="noreferrer"
    >
      Triveni Sangam, Prayagraj, Uttar Pradesh
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
