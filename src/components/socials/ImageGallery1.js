import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {FaMapLocationDot} from "react-icons/fa6";

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

const ImageGallery1 = () => {
{
        return (
          <>
            <Carousel
            centerMode={true}
            centerSlidePercentage={85}>
                <div>
                    <img src={img1} />
                    <p className="legend"><FaMapLocationDot style={{ fontSize: "1.2em", color: 'white'}} /> sfdsfds fdsfsdfsdfsd sdfsd<br/>fsdfsdf dsfsdfsdf Legend 1</p>
                </div>
                <div>
                    <img src={img2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img3} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={img4} />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src={img5} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img6} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img7} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={img8} />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src={img9} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img10} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img11} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img12} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img13} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={img14} />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src={img15} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img16} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img17} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={img18} />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src={img19} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img20} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img21} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img22} />
                    <p className="legend">Legend 2</p>
                </div>
            </Carousel>
            </>
        );
    }
};

export default ImageGallery1;