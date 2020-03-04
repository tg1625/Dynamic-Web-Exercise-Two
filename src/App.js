import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import Home from './containers/Home.js';
import Header from './components/Header.js';

import './App.css'

function App() {
  return (
    <div class="siteWrapper">
      <Header />
      <Home />
    </div>
  );
}

export default App;
