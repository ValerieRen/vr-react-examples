import React from "react";
import ImageViewer from "./components/ImageViewer";
import './App.css';

function App() {
  const path = "http://content.cylindo.com/api/v2/4404/products/ARCHIBALDCHAIR/frames/{index}/";
  return (
    <div className="App">
      <ImageViewer imagePath={path} />
    </div>
  );
}

export default App;
