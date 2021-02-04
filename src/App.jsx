import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import PageAnime from './Pages/PageAnime';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/pageAnime/:id" component={PageAnime}/>
        </Switch>
      </div>

    </Router>
  );
}

export default App;

