import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { SyncLink } from './SyncLink';
import USBAdapter from './USBAdapter';
import PCIeAdapter from './PCIeAdapter';
import { Sales } from './Sales';
import { About } from './About';
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import  NavigationBar  from './components/NavigationBar';
import { Footer } from './components/Footer.js';
import Serialpinouts from './Serialpinouts';
import NullModem from './NullModem';
import { Loopback } from './Loopback';
import LegacyDrivers from './LegacyDrivers';

function App() {
  return (
    <React.Fragment>
      <Router>
      <NavigationBar />
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/synclink/" component={SyncLink} />
            <Route exact path="/USBAdapter/" component={USBAdapter} />
            <Route exact path="/PCIeAdapter/" component={PCIeAdapter} />
            <Route exact path="/Serialpinouts/" component={Serialpinouts} />
            <Route exact path="/NullModem/" component={NullModem} />
            <Route exact path="/LegacyDrivers/" component={LegacyDrivers} />
            <Route exact path="/Loopback/" component={Loopback} />
            <Route exact path="/sales/" component={Sales} />
            <Route exact path="/about/" component={About} />
            <Route exact path="/contact/" component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </Layout>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
