import { createRoot } from "react-dom/client";
import "./styles/main.scss";
import { useState, useEffect, useCallback } from "react";
import Carousel from "./components/Carousel";
import StorySlider from "./components/StorySlider";

const App = () => {
  // const [stories, setStories] = useState([]);
  const [active, setActive] = useState(null);
  const [profiles, setProfiles] = useState([]);
  // const currentIndexHook = useState(0);

  useEffect(() => {
    // requestStories();
    requestProfiles();
  }, []);

  // async function requestStories() {
  //   const res = await fetch("http://localhost:3000/videos");
  //   const json = await res.json();

  //   setStories(json);
  // }

  async function requestProfiles() {
    const res = await fetch("http://localhost:3000/profiles");
    const json = await res.json();

    setProfiles(json);
  }

  const onEnd = useCallback(() => {
    const idx = profiles.findIndex((value) => value.id == active.id)
    if (idx >= profiles.length - 1) setActive(null)
    else setActive(profiles[idx + 1])
  }, [profiles, active])

  const onStart = useCallback(() => {
    const idx = profiles.findIndex((value) => value.id == active.id)
    if (idx <= 0) setActive(null)
    else setActive(profiles[idx - 1])
  }, [profiles, active])

  // const generateVideoList = (stories) => {
  //   return stories.map((story) => story.videoUrl);
  // };

  return (
    <div className="ui">
      <div className="main-section">
        {
          active ? "" : (
            <StorySlider stories={profiles} onSelect={setActive} />
          )
        }
        {active ? (
          <>
            <Carousel 
              profile={active}
              onStart={onStart}
              onEnd={onEnd}
            >
            </Carousel>
            <button className="close-button" onClick={() => setActive(null)}>
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