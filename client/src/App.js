import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./components/Home/Navbar";
import Home from "./components/Home/Home";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import { useCookies } from "react-cookie";

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(["name"]);

  console.log('cookies', cookies);
  console.log('setCookie', setCookie);

  return (
    <Router>
      <Navbar cookies={cookies} setCookie={setCookie} removeCookie={removeCookie}/>
      <Route exact path="/login">
        <Login cookies={cookies} setCookie={setCookie} />
      </Route>
      <Route exact path="/register">
        <Register cookies={cookies} setCookie={setCookie} />
      </Route>
      <Route exact path="/">
        <Home cookies={cookies} setCookie={setCookie} removeCookie={removeCookie}  />
      </Route>
    </Router>
  );
}

export default App;
