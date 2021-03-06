import "./App.css";
import Today from "./pages/Today";
import Week from "./pages/Week";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Today} />
        <Route path="/week" component={Week} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
