import React from 'react';
import './App.less';
import { Router, Route, Switch } from 'dva/router';
import Home from '@/pages/home';

function App({ history }: { history: any }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/home1' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
