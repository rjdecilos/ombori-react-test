import React, { useEffect } from 'react'
import { Route, Link, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import Home from '../home'
import About from '../about'

const App = () => {

  useEffect(() => {
    document.body.setAttribute('style', 'margin: 0')
  });
  return (<div>

    <main style={{ padding: 0}}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={About} />
      </Switch>
    </main>
  </div>)
}

export default App
