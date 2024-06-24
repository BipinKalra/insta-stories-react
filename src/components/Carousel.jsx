import { useCallback, useEffect, useRef, useState } from "react";

const Carousel = (props) => {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [videos, setVideos] = useState([]);
  const intervalRef = useRef(null);

  async function requestVideos() {
    setLoading(true);
    const res = await fetch(`http://localhost:3000/videos?profileId=${props.profile.id}`);
    const json = await res.json();

    setVideos(json);
    setLoading(false);
  }

  const prevElement = useCallback(() => {
    if (index === 0) props.onStart();
    else setIndex(index => index - 1);
  }, [index, props])

  const nextElement = useCallback(() => {
    if (index === videos.length - 1) props.onEnd();
    else setIndex(index => index + 1)
  }, [videos, index, props])

  useEffect(() => {
    intervalRef.current = setInterval(nextElement, 10000);
    requestVideos();
    setIndex(0)

    return () => {
      clearInterval(intervalRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  return (
    <div className="container">
      <div
        className="carousel"
        onMouseEnter={() => clearInterval(intervalRef.current)}
        onMouseLeave={() => {
          intervalRef.current = setInterval(nextElement, 10000);
        }}
      >
        {videos.map((element) => (
          <video
            width="100%"
            height="100%"
            className="carousel-video"
            key={element.id}
            style={{ translate: `${-100 * index}%` }}
            muted
            autoPlay
            playsInline
            onEnded={nextElement}
          >
            <source src={element.videoUrl} type="video/mp4" />
          </video>
        ))}
        <button className="left-button" onClick={prevElement}>
          {" "}
        </button>
        <button className="right-button" onClick={nextElement}>
          {" "}
        </button>
      </div>
    </div>
  );
};

export default Carousel;
