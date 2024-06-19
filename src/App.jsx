import { createRoot } from "react-dom/client";
import Story from "./components/Story";

const App = () => {
  return (
    <div>
      <Story thumbnail = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png" link = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
    </div>
  )
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);