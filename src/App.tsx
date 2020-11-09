import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Portfolio from './views/Portfolio';
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter basename="/Portfolio-Reaction">
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/Portfolio-Reaction/" exact component={Home} />
          <Route path="/Portfolio-Reaction/about" exact component={About} />
          <Route path="/Portfolio-Reaction/portfolio" exact component={Portfolio} />
          <Route path="/Portfolio-Reaction/contact" exact component={Contact} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
