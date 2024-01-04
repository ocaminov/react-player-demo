import React from "react";
import { useState } from "react";
import YouTubePlayer from "react-player/youtube";

function App() {
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    setPlaying((prev) => !prev);
  };

  return (
    <div>
      <button onClick={handlePlay}>Parar/Reproducir</button>
      <div style={{ background: "yellow", width: "100vw" }}>
        <YouTubePlayer
          url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
          controls
          muted
          playing={playing}
          light
          style={{ padding: "20px", margin: "auto" }}
          onEnded={() => {
            alert("Video finalizado");
          }}
        />
      </div>
    </div>
  );
}

export default App;
