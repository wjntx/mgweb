import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Sales } from './Sales';
import { About } from './About';
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Layout>
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/sales" component={Sales} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
