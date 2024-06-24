import { createRoot } from "react-dom/client";
import "./styles/main.scss";
import { useState, useEffect } from "react";
import Carousel from "./components/Carousel";
import StorySlider from "./components/StorySlider";

const App = () => {
  const [stories, setStories] = useState([]);
  const [active, setActive] = useState(false);
  // const currentIndexHook = useState(0);

  useEffect(() => {
    requestStories();
  }, []);

  async function requestStories() {
    const res = await fetch("http://localhost:3000/videos");
    const json = await res.json();

    setStories(json);
  }

  const generateVideoList = (stories) => {
    return stories.map((story) => story.videoUrl);
  };

  return (
    <div className="ui">
      <div className="main-section">
        {
          active ? "" : (
            <StorySlider stories={stories} updateActiveState={setActive} />
          )
        }
        {active ? (
          <>
            <Carousel elementList={generateVideoList(stories)}></Carousel>
            <button className="close-button" onClick={() => setActive(false)}>
              &times;
            </button>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);