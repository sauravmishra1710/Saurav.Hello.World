import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import img1 from "../../img/stars.jpg";
import img_thumb from "../../img/stars_copy.png";

const images = [
  {
    original: img1,
    thumbnail: img1,
    description: "test1",
    thumbnailLabel: "1",
  },
  {
    original: img1,
    thumbnail: img1,
    description: "test2",
    thumbnailLabel: "2",
  },
  {
    original: img1,
    thumbnail: img1,
    description: "test3",
    thumbnailLabel: "3",
  },
];

function ImageGallery1() {
    return <ImageGallery
    items={images}
    showPlayButton={true}
    showFullscreenButton={false}/>;
  }

export default ImageGallery1;