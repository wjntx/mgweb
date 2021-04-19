import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { SyncLink } from './SyncLink';
import USBAdapter from './USBAdapter';
import PCIeAdapter from './PCIeAdapter';
import GT4e from './GT4e';
import Sales from './Sales';
import Environmental from './Environmental';
import DFARS from './DFARS';
import oem from './oem';
import design from './design';
import About from './About';
import Contact from './Contact';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import  NavigationBar  from './components/NavigationBar';
import Serialpinouts from './Serialpinouts';
import NullModem from './NullModem';
import { Loopback } from './Loopback';
import LegacyDrivers from './LegacyDrivers';
import apiwin from './apiwin';
import apilin from './apilin';
import termsofuse from './termsofuse';
import privacy from './privacy';
import faq from './faq';
import trademarks from './trademarks';
import { Footer } from './components/Footer.js';
import CookieConsent from "react-cookie-consent";
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.navlink {
  color: #72192d;
  font-weight: 500;
  &:hover{
      text-decoration: none;
  }
}
`;

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
            <Route exact path="/GT4e/" component={GT4e} />
            <Route exact path="/Serialpinouts/" component={Serialpinouts} />
            <Route exact path="/NullModem/" component={NullModem} />
            <Route exact path="/LegacyDrivers/" component={LegacyDrivers} />
            <Route exact path="/apiwin/" component={apiwin} />
            <Route exact path="/apilin/" component={apilin} />
            <Route exact path="/Loopback/" component={Loopback} />
            <Route exact path="/sales/" component={Sales} />
            <Route exact path="/Environmental/" component={Environmental} />
            <Route exact path="/DFARS/" component={DFARS} />
            <Route exact path="/oem/" component={oem} />
            <Route exact path="/design/" component={design} />
            <Route exact path="/About/" component={About} />
            <Route exact path="/contact/" component={Contact} />
            <Route exact path="/termsofuse/" component={termsofuse} />
            <Route exact path="/privacy/" component={privacy} />
            <Route exact path="/faq/" component={faq} />
            <Route exact path="/trademarks/" component={trademarks} />
            <Route component={NoMatch} />
          </Switch>
        </Layout>
        <Footer />
        <Styles>
        <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="myAwesomeCookieName2"
        style={{ color: "#000000", background: "#c4c4c4" }}
        contentStyle={{flex: "1 0 200px"}}
        buttonStyle={{ background: "#72192d", color: "white", fontSize: "13px" }}
        expires={150}>
          This website uses cookies. See <NavLink to="/privacy/"className="navlink">Privacy</NavLink> for details.
          </CookieConsent>
        </Styles>
      </Router>
    </React.Fragment>
  );
}

export default App;
