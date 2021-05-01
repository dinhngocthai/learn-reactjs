import React from 'react';
import './App.scss';
import {Link, Route, Switch } from 'react-router-dom';

import TodoFeature from './feature/Todo/pages';
import ColorBox from './feature/ColorBox';
import BetterClock from './feature/BetterClock';


function App() {

  return (

    <div className="app">
      <div>Home Page</div>
      <p> <Link to="/todos">Go to Todo    </Link>
      <Link to="/colorBox">Go to ColorBox    </Link>
      <Link to="/betterClock">Go to BetterClock    </Link>
      </p>
      <p> </p>
      {/* nav link khac link o cho them class active vao link dc chon hien tai */}
      {/* de loc nhung components trung nhau tai mot thoi diem*/}
      <Switch>
      <Route path="/todos" component={TodoFeature} />
      <Route path="/todos" component={TodoFeature} />
      <Route path="/todos" component={TodoFeature} />

      <Route path="/colorBox" component={ColorBox} />
      <Route path="/betterClock" component={BetterClock} />
      </Switch>
    </div>
  );
}

export default App;
