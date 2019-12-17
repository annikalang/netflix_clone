import React from 'react';
import './css/App.css';

// importing main component
import Main from "./pages/index.js";

// importing router and switch
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/" component={Main} />
    </Switch>
  );
}

export default App;
