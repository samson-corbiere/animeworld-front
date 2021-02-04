import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import PageAnime from './Pages/PageAnime';
import FavoritePage from './components/FavoritePage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/pageAnime/:id" component={PageAnime} />
          <Route exact path="/favoritePage" component={FavoritePage} />
        </Switch>
      </div>

    </Router>
  );
}

export default App;

