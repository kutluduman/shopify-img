import Navbar from './components/Home/Navbar';
import {Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/User/Login';
import Register from './components/User/Register';



function App() {
  return (
    <Router>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route exact path='/login'>
        <Login/>
      </Route>
      <Route exact path='/register'>
        <Register/>
      </Route>
    </Router>
  );
}

export default App;
