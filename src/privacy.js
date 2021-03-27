import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import image1  from './assets/pc104-small-rohs.jpg';

const Styles = styled.div`
h1 {
    font-size: 2rem;
}

h3 {
    font-size: 1.5rem;
    text-align: center;
    font-weight: 600;
    white-space: nowrap;
}

h2 {
    color: #72192d;
    font-size: 1.35rem;
    text-align: center;
    font-weight: 600;
    white-space: nowrap;
}

h4 {
    color: #72192d;
    font-size: 1.5rem;
    font-weight: 600;
}

h5 {
    font-size: 1.25rem;
}

.ulFormat {
    padding-top: 10px;
    padding-bottom: 15px;
}

.toggleLink {
    color: #72192d;
    text-decoration: none;
    &:hover {
        color: black;
        font-weight: 500;
    }
}

.subhead {
    color: black;
    font-size: 1.15rem;
    font-weight: 600;
    padding-bottom: 10px;
}

.subhead2 {
    color: dark grey;
    font-size: 1rem;
    font-weight: 700;
    padding-bottom: 10px;
}

hr {
    padding: 0;
}

.subNote2 {
    font-weight: 600;
    font-size: 1rem;
    padding-bottom: 5px;
}

.displayImage{
    height:270px;
    width:300px;
   }

a {
    color: #72192d;
    &:hover{
        text-decoration: none;
    }
}

.text-link {
    font-weight: 500;
}
`;

function privacy() {
    window.scrollTo(0,0);
    return (
        <React.Fragment>
        <Styles>
            <h1>Online Privacy Statement</h1>
            <hr />
            <br /><h5>Online Privacy Statement</h5><br />
            The Privacy Statement Regarding Customer and Online User Information applies to MicroGate Systems, Ltd. (“MicroGate”, "we" or "our”). This privacy statement does not apply to the websites of our business partners or to any other third parties, even if their websites are linked to our website. We recommend you review the privacy statements of the other parties with whom you interact.
            <br /><br />
            This privacy statement governs personal information we collect from our customers and online from our website users ("you”). For the purposes of this privacy statement, "personal information" means information that identifies you, such as your name, telephone number, and email address. MicroGate is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy statement.
            <br /><br />
            MicroGate may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes. This policy is effective from January 15th 2012.
            <br /><br />
            <h5>What we collect</h5><br />
            We may collect your personal information for various purposes, such as processing your order or corresponding with you. In addition, we may also collect information relating to your use of our Web sites through the use of various technologies, including cookies. Information we may request includes your email address, name, address, and telephone number. If you make a purchase, we may ask for your credit card number and billing information. We may collect information about your visits to our websites, including the pages you view, the links and ads you click, search terms you enter, and other actions you take in connection with the MicroGate website. We may also collect certain information from the browser you used to come to our website, such as your Internet Protocol (IP) address, browser type and language, access times, the Uniform Resource Locator (URL) of the website that referred you to our website and to which URL you browse away from our site if you click on a link on our site. We may use your personal information to support products or services you have obtained from us, such as notifying you of a product update or fix.
            <br /><br />
            <h5>What we do with the information we gather</h5><br />
            MicroGate uses your personal information to:
                <ul className="ulFormat">
                <li>Deliver the services and support, or carry out, the transactions you have requested;</li>
                <li>Send communications to you, such as product safety information, your transactions status (for example, order confirmations), information about products and services available from MicroGate, promotional offers, and surveys;</li>
                <li>Customize, analyze, and improve our products, services (including the content and advertisements on our website), technologies, communications and relationship with you;</li>
                <li>Enforce our conditions of sale, website terms and/or separate contracts (if applicable) with you;</li>
                <li>Protect the security or integrity of the website, our business, or our products or services; or</li>
                <li>Otherwise, as disclosed to you at the point of collection.</li>
            </ul>
            To fulfill your requests by us or by others involved in fulfillment. To contact you for customer satisfaction surveys, market research or in connection with certain transactions. To support products or services you have obtained from us. By MicroGate and selected organizations for marketing purposes if you have permitted such use. To personalize your experience while you are on our sites, make navigation easier, and for Web site usage statistics.
            <br /><br />
            <h5>Security</h5><br />
            We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.
            <br /><br />
            <h5>How we use cookies</h5><br />
            A cookie is a small file which asks permission to be placed on your computer's hard drive. Once you agree, the file is added and the cookie helps analyze web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences.
            <br /><br />
            We may use traffic log cookies to identify which pages are being used. This helps us analyze data about web page traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system.
            <br /><br />
            Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us.
            <br /><br />
            You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.
            <br /><br />
            <h5>Links to other websites</h5><br />
            Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question.
            <br /><br />
            <h5>Controlling your personal information</h5><br />
            MicroGate uses your personal information to:
                <ul className="ulFormat">
                <li>whenever you are asked to fill in a form on the website, look for the box that you can click to indicate that you do not want the information to be used by anybody for direct marketing purposes</li>
                <li>if you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by writing to or emailing us at privacy@microgate.com</li>
            </ul>
            We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so.
            <br />
            If you believe that any information we are holding on you is incorrect or incomplete, please write to or email us as soon as possible, at the above address. We will promptly correct any information found to be incorrect.
            <br /><br />
        </Styles>
        </React.Fragment>
    );
}

export default privacy;