import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Codeforces from "./components/codeforces";
import Navigation from "./components/navigation";

function App() {
  return (
    <Router>
      <div>
        <div className="header">@CodePlace</div>
        <Navigation />
        <br />
        <Switch>
          <Route exact path="/">
            <Codeforces />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
