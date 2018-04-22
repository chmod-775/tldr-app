import React from 'react';
import { Route } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import Analysis from '../analysis';
import Landing from '../landing'
import Header from './header';


const App = () => (
  <div>
    <Header />
    <main>
      <Route exact path="/" component={Landing} />
      <Route exact path="/analysis" component={Analysis} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
)

export default App;
