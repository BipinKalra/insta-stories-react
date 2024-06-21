/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/media-has-caption */
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const StoryCarousel = (props) => {
  // const handleDragStart = (e) => e.preventDefault();

  const videoComponentsList = props.videoList.map((videoURL) => (
    <video width="100%" className="media" autoPlay muted>
      <source src={videoURL} />
    </video>
  ));

  return (
    <div className="story-carousel">
      <AliceCarousel mouseTracking items={videoComponentsList} />
    </div>
  );
};

export default StoryCarousel;
