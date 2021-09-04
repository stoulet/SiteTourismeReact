import './App.css';
import Site from "./containers/Site/Site";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Site />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
