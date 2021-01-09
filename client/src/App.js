import Navbar from "./components/Home/Navbar";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import { useCookies } from "react-cookie";

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(["name"]);

  return (
    <Router>
      <Route exact path="/">
        <Home cookies={cookies} setCookie={setCookie} removeCookie={removeCookie}  />
      </Route>
      <Route exact path="/login">
        <Login cookies={cookies} setCookie={setCookie} removeCookie={removeCookie} />
      </Route>
      <Route exact path="/register">
        <Register cookies={cookies} setCookie={setCookie} removeCookie={removeCookie} />
      </Route>
    </Router>
  );
}

export default App;
