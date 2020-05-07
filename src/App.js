import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import DisplayImage from "./components/DisplayImage";

function App() {
  const [images, setImages] = useState([]);

  return (
    <div className="App">
      <div className="bg-warning">
        <SearchBar setImages={setImages} />
      </div>
      <div className="bg-info">
        <DisplayImage images={images}/>
      </div>
    </div>
  );
}

export default App;
