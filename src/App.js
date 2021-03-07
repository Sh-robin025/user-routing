
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Route, Link, Router, Switch } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './Components/Header';
import Body from './Components/Body';
import NotFound from './Components/Body/NotFound';
import Details from './Components/Body/Details';
import Footer from './Components/Footer';


function App() {
  return (
    <Router>
      <Header />
      {/* <Body /> */}
      <Switch>
        <Route exact path="/">
          <Body />
        </Route>

        <Route path="/home">
          <Body />
        </Route>

        <Route path="/details/:id">
          <Details />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
