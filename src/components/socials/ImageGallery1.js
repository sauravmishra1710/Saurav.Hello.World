import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import allImages from "../../img/stars.jpg";
import img_thumb from "../../img/stars_copy.png";

const images = [
  {
    original: allImages,
    thumbnail: img_thumb,
  },
  {
    original: allImages,
    thumbnail: img_thumb,
  },
  {
    original: allImages,
    thumbnail: img_thumb,
  },
];

function ImageGallery1() {
    return <ImageGallery
    items={images}
    showPlayButton={true}
    showFullscreenButton={false}/>;
  }

export default ImageGallery1;