import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

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
import img26 from "../../img/CullinarySpaces/26.png";
import img27 from "../../img/CullinarySpaces/27.png";
import img28 from "../../img/CullinarySpaces/28.png";
import img29 from "../../img/CullinarySpaces/29.png";
import img30 from "../../img/CullinarySpaces/30.png";
import img31 from "../../img/CullinarySpaces/31.png";

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
];

const lightBoxCaptions = [
  <p>The Death by Chocolate filled with Bourbon Chips...</p>,
  <p>
    The Mix Veg Paratha - Wheat flatbread stuffed with a flavorful & spicy
    mixture of vegetables served with green mint chutney and cubes of butter...{" "}
  </p>,
  <p>
    The Rajma Chawal - A delicious comfort food power packed with a perfect
    combination of carbs & protein...
  </p>,
  <p>
    The Healthy Steak Stir Fry - Grilled chicken breast loaded with stir-fried
    veggies (perfect combination of carrots, peppers, peas, & corn...) served
    over rice for that flavorful and balanced portion...
  </p>,
  <p>
    The Creamy Spaghetti With Butter Garlic Prawns - An indulgent but not
    ridiculously rich spaghetti dish smothered in a creamy sauce infused with
    sauteed garlic, & tossed through with juicy prawns. It's a pure bliss dream
    come true for every spaghetti lover...!!!
  </p>,
  <p>
    The Classic Onion Pakoras with Tomato Chutney - Crunchy, Spice-rich,
    Delicate, & Hearty all at the same time. One of the most addictive Indian
    comfort food...
  </p>,
  <p>
    The Classic Cheela & Chutney - The crisp & soft Indian version pancakes
    prepared in almost every Indian kitchen in various different flavours.
  </p>,
  <p>
    The Street Style Maggi - Instant 2 min classic version loaded with butter...
  </p>,
  <p>
    The Stuffed Idly - Moving away from the normal to have the veggie stuffed
    masala idly in preparation...
  </p>,
  <p>
    The Cottage Cheese Fritters - Once of the favourite & delicious roadside
    snack to serve your all day cravings...
  </p>,
  <p>
    Burger King - Loaded Burger with sliced veggies, avocado cream, cheese, &
    minced meat patty...
  </p>,
  <p>
    Chocolate for Breakfast and still feel excellent about it... Yes, The
    Chocolate Oat bowl loaded with seasonal fruits & dark chocolate flavoured
    peanut butter...
  </p>,
  <p>
    The perfect flavourful lunch plate - Jeera Rice, Prawn Vepudu Masala, and
    Daal Fry...
  </p>,
  <p>Biskut ke saath time for some Chai pe Charcha...</p>,
  <p>
    The Rural Karnataka's most nutritious and filling meal - Ragi Mudde served
    with curd & Pepper Chicken...
  </p>,
  <p>
    The Dal Khichdi - A super comforting bowl of Indian wholesome meal. Made
    with rice, dal and spices is delicious, nourishing and wholesome...
  </p>,
  <p>
    The Desi street side Chow Mein - A popular roadside style saucy & flavourful
    hakka chow mein...
  </p>,
  <p>
    The Classic Gnocchi - Oval shaped ribbed soft dumplings stuffed with potato
    and sauteed with butter & cream sauce...
  </p>,
  <p>
    The Drums of Heaven - Spicy & Smoky grilled drumsticks served starting out
    of the grill...
  </p>,
  <p>
    The Cream of Mushroom - A warm bowl of soup so deliciously creamy to treat
    the taste buds with the deep earthy flavours of tender bites of mushroom
    pieces flavoured with garlic, onions and herbs topped with crushed
    peppers...
  </p>,
  <p>
    The Rice Farra - A traditional dish from the state of Chattisgarh prepared
    from the left over rice & rice flour steamed and sauteed with mild spices
    served with chutney...
  </p>,
  <p>
    The Puliyogare - This tangy, spicy & flavourful rice dish made with the
    puliyogare podi powder (mix of roasted lentils, peanuts, red chilies,
    tamarind & other spices) will surely bring the taste buds to a burst of
    flavours...
  </p>,
  <p>
    The Hummus - A smooth and creamy middle easetrn delicacy, puree of cooked
    chickpeas, tahini, lemon juice topped with olive oil & dried seasoning herbs
    mix...{" "}
  </p>,
  <p>
    The Raagi Chocolate Pancakes - One of the best ways to fulfill the chocolate
    cravings for breakfast topped with fresh cream, choclate sauce and
    almonds...
  </p>,
  <p>
    The Mushroom Spaghetti Aglio Olio - My comfort food for that perfect weenend
    dinner with spaghetti tossed with mushrooms, coriander, garlic, & seasoning
    herbs with much of olive oil to enahnce the flavours...
  </p>,
  <p>
    The Butter Garlic Prawns - The saucy, flavoursome and full of garlic flavour
    with tender pieces of prawns coated in a mouth-watering savoury sauce that’s
    rich, creamy and seasoned with black pepper, salt, parsley and chilli flakes
    to make it utterly delightful... An all time favourite...!!
  </p>,
  <p>
    The Hyderabadi Chicken Biryani - An aromatic, mouth watering & authentic
    Indian dish with exquisitely spiced succulent chicken in layers of fluffy
    basmati rice, fragrant spices and fried onions...
  </p>,
  <p>
    The Mati Handi Mutton - A classic from the state of Odisha, my first time
    trying to cook the traditional slow method using earthern pots to retain the
    finer goodness, aroma of the spices and ensure the earthiness of the pots is
    infused into the dish...
  </p>,
  <p>
    The Whole Wheat Pizza - Crispy on the outside, soft on the inside as it
    turned out to be on the very first attempt to get my hands on pizza. The
    crust and the toppings turned out to be in complete harmony...
  </p>,
  <p>
    The Schezwan Fried Rice with Chilli Mushroom - The veggie packed schezwan
    rice forms a flavourful combination with chilli button mushrooms tossed with
    colourful bell peppers & spring onions covered in a sweet and spicy sauce. A
    perfect Indo-Chinese fusion for dinner...
  </p>,
  <p>
    The Paniyaram with Peanut Chutney - A traditional South Indian breakfast
    dish that are crispy on the outside and soft on the inside, with a tangy
    flavor server with a spicy peanut tomato chutney...
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
