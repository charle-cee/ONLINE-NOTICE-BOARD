import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopBar from './components/topBar/TopBar';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Recent from './pages/recent/Recent';
import ViewEvents from './pages/viewevents/ViewEvents';
import Welcome from './pages/welcome/Welcome';
import Home from './pages/home/Homepage'
import LoginChoice from './pages/loginchoice/LoginChoice';
import Create from './pages/create/Create';
import Sidebar from './pages/sidebar/Sidebar';
import Homepage from './pages/home/Homepage';

function App() {
  return (
    <Router>
    <div className="App">
      <TopBar />
      
      <div className="container">
      
      <Switch>
      <Route exact path="/">
        <Homepage />
        </Route>

        <Route exact path="/login">
        <Login />
        </Route>

        <Route exact path="/register">
        <Register />
        </Route>

        <Route exact path="/welcome">
        <Welcome />
        </Route>


        <Route exact path="/recent">
        <Recent />
        </Route>

        <Route exact path="/viewevents">
        <ViewEvents />
        </Route>

        <Route exact path="/loginchoice">
        <LoginChoice />
        </Route>

        

      </Switch>
    </div>
    </div>
    </Router>
    
  );
}

export default App;
