import { createRoot } from "react-dom/client";
import "./styles/main.scss";
import { useState, useEffect } from "react";
import Story from "./components/Story";
// import StoryCarousel from "./components/StoryCarousel";
import Carousel from "./components/Carousel";

const App = () => {
  const [stories, setStories] = useState([]);
  const [active, setActive] = useState(false);

  useEffect(() => {
    requestStories();
  }, []);

  async function requestStories() {
    const res = await fetch("http://localhost:3000/videos");
    const json = await res.json();

    setStories(json);
  }

  const generateVideoList = (stories) => {
    return stories.map((story) => (
      story.videoUrl
    ))
  }

  // const generateImageList = (stories) => {
  //   return stories.map((story) => (
  //     story.thumbnailUrl
  //   ))
  // }

  return (
    <div className="ui">
      <div className="stories">
        { active ? (
          ""
        ) : (
          stories.map((story) => (
            <Story thumbnail = {story.thumbnailUrl} video = {story.videoUrl} key = {story.id} onClick = {() => setActive(true)}/>
          ))
        )}
      </div>
      {
        active ? (
          <Carousel elementList = {generateVideoList(stories)}></Carousel>
        ) : (
          ""
        )
      }
      <button className="close-button" onClick={() => setActive(false)}>Close</button>
    </div>
  )
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);