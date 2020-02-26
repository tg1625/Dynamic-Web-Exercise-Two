import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import Home from './containers/Home.js';

//API Key
const defaultKey = "3170d73852c5601a02c180337486d21c";


function App() {
  return (
    <Home />
  );
}

export default App;
