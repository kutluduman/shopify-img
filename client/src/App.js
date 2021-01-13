import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Navbar from "./components/Home/Navbar";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import Uploads from "./components/Home/Uploads";
import Gallery from "./components/Home/Gallery";

import './css/App.css'

import { useCookies } from "react-cookie";

const transformUploads = (uploads) => {
  return uploads.map(u => ({
    original: u.imageUrl,
    thumbnail: u.thumbnailUrl
  }));
}


function App() {
  const [cookies, setCookie, removeCookie] = useCookies(["name"]);

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
        
      </Route>
    </Router>
  );
}

export default App;
