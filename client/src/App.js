import { useState, useCallback, useEffect } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Navbar from "./components/Home/Navbar";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import Upload from "./components/Home/Upload";
import Gallery from "./components/Home/Gallery";

import "./css/App.css";

import { useCookies } from "react-cookie";

const transformUploads = (uploads) => {
  return uploads.map((u) => ({
    original: u.imageUrl,
    thumbnail: u.thumbnailUrl,
  }));
};

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(["name"]);
  const [images, setImages] = useState(null);

  const fetchUploads = useCallback(() => {
    fetch("http://localhost:8080/uploads")
      .then((response) =>
        response.json().then((data) => setImages(transformUploads(data)))
      )
      .catch(console.error);
  }, []);

  useEffect(() => {
    fetchUploads();
  }, [fetchUploads]);

  return (
    <Router>
      <Navbar
        cookies={cookies}
        setCookie={setCookie}
        removeCookie={removeCookie}
      />
      <Route exact path="/login">
        <Login cookies={cookies} setCookie={setCookie} />
      </Route>
      <Route exact path="/register">
        <Register cookies={cookies} setCookie={setCookie} />
      </Route>
      <Route exact path="/">
        <div className="container">
          <div className="upload-container">
            <Upload fetchUploads={fetchUploads} />
          </div>
        </div>
        <div className="container">
          <div className="gallery-container">
            {images && images.length ? <Gallery images={images} /> : null}
          </div>
        </div>
      </Route>
    </Router>
  );
}

export default App;
